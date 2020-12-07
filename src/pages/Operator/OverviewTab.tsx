import React from "react";
import {OperatorLog} from "./Log";
import {Paper} from "../../design-system/Paper";
import {PropertyTable} from "../../components/PropertyTable";
import {useQueryWithTimeTravel} from "../../TimeTravel";
import {gql} from "@apollo/client";
import {Address} from "../../components/Address";
import {GetOperatorDataQuery} from "../../generated/graphql";
import {FormattedTime} from "../../components/FormattedTime";
import {formatNumber, formatPercentage} from "../../utils/formatNumber";


const OPERATOR_INFO_QUERY = gql`
    query GetOperatorData($id: ID!, $block: Block_height) {
      operator(id: $id) {
        id,
        address,
        owner,
        beneficiary,
        authorizer,
        
        stakedAt,
        stakeLockExpiresAt,
        
        randomBeaconOperatorAuthorized,
        bondedECDSAKeepFactoryAuthorized,
        tbtcSystemSortitionPoolAuthorized,
        
        stakedropEthScore,
        stakedropBoost,
        stakedropRewardWeight
      },
      
      status: statusRecord(id: "current") {
        totalRewardWeight
      }       
    }
`;


export default function OverviewTab(props: {
  operatorId: string
}) {
  const {operatorId} = props;

  const { loading, error, data } = useQueryWithTimeTravel<GetOperatorDataQuery>(OPERATOR_INFO_QUERY, {variables: {
      id: props.operatorId,
    }});

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :( {""+ error}</p>;

  const operator = data.operator!;
  const status = data.status!;

  return <Paper padding>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{flex:1}}>
        <PropertyTable data={[
          {
            title: "Stake",
            properties: [
              {
                key: 'dateStaked',
                label: "Date",
                tooltip: "When KEEP was originally staked for this operator.",
                value: <FormattedTime format={"full"} time={operator.stakedAt} />
              },
              // {
              //   key: 'stakeLockedUntil',
              //   label: "Locked Until",
              //   tooltip: "The stake can only be withdrawn after this date. This will change when keeps are redeemed early.",
              //   value: <FormattedTime format={"full"} time={operator.stakeLockExpiresAt} />
              // },
            ],
          },
          {
            title: "Roles",
            properties: [
              {
                key: 'address',
                label: "Node",
                tooltip: "The address running the node server.",
                value: <Address address={operator.address} />
              },
              {
                key: 'owner',
                label: "Owner",
                tooltip: "Assigns roles, stakes KEEP and provides ETH for bonding.",
                value: <Address address={operator.owner} />
              },
              {
                key: 'beneficiary',
                label: "Beneficiary",
                tooltip: "Receives earnings and rewards.",
                value: <Address address={operator.beneficiary} />
              },
              {
                key: 'authorizer',
                label: "Authorizer",
                tooltip: "Can authorize new contracts.",
                value: <Address address={operator.authorizer} />
              },
            ]
          },
          {
            title: 'Authorizations',
            properties: [
              {
                key: 'randomBeacon',
                label: "Random Beacon",
                value: operator.randomBeaconOperatorAuthorized ? 'Yes' : 'No'
              },
              {
                key: 'ecdsa',
                label: "ECDSA Factory",
                value: operator.bondedECDSAKeepFactoryAuthorized ? 'Yes' : 'No'
              },
              // {
              //   key: 'tbtc',
              //   label: "TBTC System",
              //   value: operator.tbtcSystemSortitionPoolAuthorized ? 'Yes' : 'No'
              // },
            ]
          },
          {
            title: 'Stakedrop',
            properties: [
              {
                key: 'ethScore',
                label: "ETH Score",
                tooltip: "Based on the amount of ETH provided to the system.",
                value: formatNumber(operator.stakedropEthScore),
              },
              {
                key: 'bost',
                label: "Boost",
                tooltip: "The boost is based on the amount of staked KEEP, and increases the reward weight.",
                value: formatNumber(operator.stakedropBoost),
              },
              {
                key: 'rewardWeight',
                label: "Reward Weight",
                tooltip: "The reward weight represents this operator's share of the total rewards.",
                value: formatNumber(operator.stakedropRewardWeight),
              },
              {
                key: 'rewardWeightShare',
                label: "Reward Share",
                tooltip: "The share of rewards going to this operator.",
                value: formatPercentage(parseFloat(operator.stakedropRewardWeight) / parseFloat(status.totalRewardWeight)),
              },
            ]
          }
        ]}
        />
      </div>
      <div style={{flex:1}}>
        <h3 style={{marginTop: 0}}>Log</h3>
        <OperatorLog operatorId={operatorId} />
      </div>
    </div>
  </Paper>;
}