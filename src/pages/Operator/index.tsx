import {gql, useQuery} from "@apollo/client";
import React from "react";
import {useParams} from 'react-router';
import {css} from "emotion";
import {Paper} from "../../design-system/Paper";
import {Helmet} from "react-helmet";
import {Box} from "../../components/Box";
import {getSatoshiesAsTBTC} from "../../utils/getSatoshisAsTBTC";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {GetOperatorQuery} from "../../generated/graphql";
import {KeepsTable} from "./KeepsTable";
import {BeaconGroupsTable} from "./BeaconGroupTable";
import {useQueryWithTimeTravel} from "../../TimeTravel";
import {keepFormatter} from "../../components/KeepValue";
import {PageHeader} from "../../components/PageHeader";
import {HeaderBoxes} from "../../components/HeaderBoxes";
import {Hash} from "../../components/Address";
import {PageHeaderMenu} from "../../components/PageHeaderMenu";
import {useEtherscanDomain} from "../../NetworkContext";
import { useMemo } from "react";
import {useHistory} from "react-router-dom";
import OverviewTab from "./OverviewTab";


const OPERATOR_QUERY = gql`
    query GetOperator($id: ID!, $block: Block_height) {
        operator(id: $id, block: $block) {
            id,
            address,
            bonded,
            unboundAvailable,
            stakedAmount,
            totalFaultCount,
            attributableFaultCount,
            totalTBTCRewards,
            beaconGroupMemberships(orderBy: groupCreatedAt, orderDirection: desc) {
                count,
                reward,
                group {
                    id,
                    pubKey,
                    createdAt,
                }
            },
            stakedropRewardsDispensed,
            stakedropECDSARewardsDispensed,
            stakedropBeaconRewardsDispensed
        }
    }
`;


export function Operator() {
  return <div className={css`
      padding: 1em;
    `}>
    <Helmet>
      <title>Operator</title>
    </Helmet>
    <Content />
  </div>
}

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const formatterBTC = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 6
});


export function Content() {
  const { operatorId, tabId } = useParams<any>();
  const history = useHistory();
  const etherscan = useEtherscanDomain();
  const { loading, error, data } = useQueryWithTimeTravel<GetOperatorQuery>(OPERATOR_QUERY, {variables: {id: operatorId}});

  const TAB_IDS = ["", "keeps", "beacongroups"];
  const activeTabIndex = useMemo(() => {
    const activeTab = TAB_IDS.indexOf(tabId);
    if (activeTab == -1) {
      return 0;
    }
    return activeTab;
  }, [tabId]);
  const handleSelect = (index: number) => {
    const id = TAB_IDS[index];
    history.replace(`/operator/${operatorId}/${id}`)
  }

  if (loading) { return <p>Loading...</p>; }
  if (error || !data) { return <p>Error :( {""+ error}</p>; }
  const operator = data.operator;
  if (!operator) {
    return <p>No such operator.</p>
  }

  const total = (parseFloat(operator.unboundAvailable) + parseFloat(operator.bonded));
  const bonded = parseFloat(operator.bonded);

  return <div>
    <PageHeader label={<Hash hash={operator.address} />} subtitle={"Operator"} buttons={
      <PageHeaderMenu>
        <div><a href={`https://${etherscan}/address/${operator.address}`}>Open in Etherscan</a></div>
      </PageHeaderMenu>
    }>
      <HeaderBoxes>
        <Box label={"bonded"}>
          <div>{formatter.format(operator.bonded)} ETH</div>

          {total > 0 ? <div style={{fontSize: '20px', color: 'gray'}}>
            {formatter.format((bonded / total * 100))}% of {formatter.format(total)} ETH
          </div> : null}
        </Box>

        <Box label={"available to bond"}>
          <div>
            {formatter.format(operator.unboundAvailable)} ETH
          </div>
        </Box>

        <Box label={"staked"}>
          <div>
            {formatter.format(operator.stakedAmount)} KEEP
          </div>
        </Box>

        <Box label={"faults"} tooltip={"How often this operator was involved in a signing group with improper behaviour. If two numbers, the first one counts how often this operator can be blamed for the fault."}>
          <div>
            {operator.attributableFaultCount > 0 ? <>
              {operator.attributableFaultCount} / </> : null}
            {operator.totalFaultCount}
          </div>
        </Box>

        <Box label={"fees"}>
          <div>
            {formatterBTC.format(getSatoshiesAsTBTC(operator.totalTBTCRewards))} TBTC
          </div>
        </Box>

        <Box label={"rewards dispensed"} tooltip={"Stakedrop awards which have already been dispensed to this operator (whether withdrawn or not)."}>
          <div>
            {keepFormatter.format(operator.stakedropRewardsDispensed / (10**18))} KEEP
          </div>
        </Box>
      </HeaderBoxes>
    </PageHeader>

    <Tabs selectedIndex={activeTabIndex} onSelect={handleSelect}>
      <TabList>
        <Tab>
          Overview
        </Tab>
        <Tab>
          Keeps
        </Tab>
        <Tab>
          Beacon Groups
        </Tab>
      </TabList>

      <TabPanel>
        <OverviewTab operatorId={operatorId} />
      </TabPanel>
      <TabPanel>
        <Paper padding>
          <h3 style={{marginTop: 0}}>Keeps</h3>
          <KeepsTable operatorId={operatorId} />
        </Paper>
      </TabPanel>
      <TabPanel>
        <Paper padding>
          <h3 style={{marginTop: 0}}>Random Beacon Groups</h3>
          <BeaconGroupsTable memberships={operator.beaconGroupMemberships} />
        </Paper>
      </TabPanel>
    </Tabs>
  </div>
}


