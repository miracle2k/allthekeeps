import {gql} from "@apollo/client";
import React from "react";
import {Helmet} from "react-helmet";
import type {GetRandomBeaconGroupQuery, GetStakedropDataQuery} from "../generated/graphql";
import {useParams} from "react-router";
import {InfoTooltip} from "../components/InfoTooltip";
import {Table} from "../components/Table";
import {useQueryWithTimeTravel} from "../TimeTravel";
import {dateTimeFrom, formatSeconds, FormattedTime} from "../components/FormattedTime";
import {keepFormatter} from "../components/KeepValue";
import {KeepTag} from "../components/CurrencyTags";
import { DateTime } from "luxon";
import {HeaderBoxes} from "../components/HeaderBoxes";
import {Box} from "../components/Box";

const STAKEDROP_QUERY = gql`
    query GetStakedropData($block: Block_height) {
        stakedropIntervals {
            id,
            number,
            beaconIntervalStart,
            beaconIntervalEnd,
            ecdsaIntervalStart,
            ecdsaIntervalEnd,
            keepCount,
            beaconGroupCount,
            allocationECDSA,
            allocationBeacon,
        },
        stats: statsRecord(id: "current") {
            totalStakedropECDSARewards,
            unallocatedStakedropECDSARewards,
            totalStakedropBeaconRewards,
            unallocatedStakedropBeaconRewards,
            dispensedStakedropBeaconRewards,
            dispensedStakedropECDSARewards
        }
    }
`;


export function Stakedrop() {
  const {id} = useParams<any>();
  const { loading, error, data } = useQueryWithTimeTravel<GetStakedropDataQuery>(STAKEDROP_QUERY, {variables: {id}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  const intervals = [...(data?.stakedropIntervals ?? [])];
  intervals.reverse();

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Stakedrop</title>
    </Helmet>
    <h1 style={{marginTop: 0}}>
      Stakedrop
    </h1>

    <div style={{marginBottom: 30}}>
      <HeaderBoxes>
        <Box label={"total rewards"}>
          {keepFormatter.format((parseInt(data!.stats!.totalStakedropECDSARewards) + parseInt(data!.stats!.totalStakedropBeaconRewards)) / (10**18))} KEEP
        </Box>
        <Box label={"dispensed rewards"}>
          {keepFormatter.format((parseInt(data!.stats!.dispensedStakedropBeaconRewards) + parseInt(data!.stats!.dispensedStakedropECDSARewards)) / (10**18))} KEEP
        </Box>
        {/*<Box label={"remaining rewards"}>*/}
        {/*  {keepFormatter.format((parseInt(data!.stats!.unallocatedStakedropECDSARewards) + parseInt(data!.stats!.unallocatedStakedropBeaconRewards)) / (10**18))} KEEP*/}
        {/*</Box>*/}
      </HeaderBoxes>
    </div>

    <Table
        style={{width: '100%'}}>
      <thead>
      <tr>
        <th>
          Interval
        </th>
        <th>
          Period <InfoTooltip>The periods for the ECDSA and the Beacon rewards are not exactly the same.</InfoTooltip>
        </th>
        <th>
          Allocated Rewards
        </th>
        <th>
          # Keeps <InfoTooltip>
            The number of keeps in this interval which affect the allocation of the rewards.
          </InfoTooltip>
        </th>
        <th>
          Deposit Reward <InfoTooltip>
            The reward for each individual operator, for each eligible deposit they have backed.
            This assumes the minimum number of deposits in the period will be reached.
          </InfoTooltip>
        </th>
        <th>
          # Groups <InfoTooltip>
            The number of beacon groups in this interval which affect the allocation of the rewards.
          </InfoTooltip>
        </th>
        <th>
          Group Reward <InfoTooltip>
            Reward for every Beacon Group an operator is a member of.
          </InfoTooltip>
        </th>
      </tr>
      </thead>
      <tbody>
      {intervals.map((interval) => {
        const ecdsaEndDate = dateTimeFrom(interval.ecdsaIntervalEnd);
        const secondsToEcdsaEnd = ecdsaEndDate.diffNow('seconds').seconds;

        const beaconEndDate = dateTimeFrom(interval.beaconIntervalEnd);
        const secondsToBeaconEnd = beaconEndDate.diffNow('seconds').seconds;

        return <tr key={interval.id}>
          <td>
            {interval.number}
          </td>
          <td>
            <div>
              <small>ECDSA:</small> <FormattedTime time={interval.ecdsaIntervalStart} /> - {" "}
              {secondsToEcdsaEnd > 0
                  ? <span  title={ecdsaEndDate.toLocaleString(DateTime.DATETIME_FULL)} style={{color: 'green', fontWeight: 'bold'}}>{formatSeconds(secondsToEcdsaEnd)} remaining</span>
                  : <FormattedTime time={interval.ecdsaIntervalEnd} />}

            </div>

            <div style={{color: 'gray'}}>
              <small>Beacon:</small> <FormattedTime time={interval.beaconIntervalStart} /> - {" "}
              {secondsToBeaconEnd > 0
                  ? <span title={beaconEndDate.toLocaleString(DateTime.DATETIME_FULL)} style={{color: 'green', fontWeight: 'bold'}}>{formatSeconds(secondsToBeaconEnd)} remaining</span>
                  : <FormattedTime time={interval.beaconIntervalEnd} />}
            </div>
          </td>
          <td>
            <div><KeepTag /> {keepFormatter.format(interval.allocationECDSA)} <small>(ECDSA)</small></div>
            <div><KeepTag /> {keepFormatter.format(interval.allocationBeacon)} <small>(Beacon)</small></div>
          </td>
          <td>
            {interval.keepCount}
          </td>
          <td>
            <KeepTag /> {keepFormatter.format(interval.allocationECDSA / Math.max(interval.keepCount, 1000) / 3)}
          </td>
          <td>
            {interval.beaconGroupCount}
          </td>
          <td>
            <KeepTag /> {keepFormatter.format(interval.allocationBeacon / interval.beaconGroupCount / 64)}
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  </div>
}
