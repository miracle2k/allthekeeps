import {Table} from "../../components/Table";
import {InfoTooltip} from "../../components/InfoTooltip";
import {Hash} from "../../components/Address";
import {getGroupName} from "../Beacon/GroupName";
import {ETHTag} from "../../components/CurrencyTags";
import {ETHValue} from "../../components/ETHValue";
import {TimeToNow} from "../../components/FormattedTime";
import React from "react";

export function BeaconGroupsTable(props: {
  memberships: any,
}) {
  const {memberships} = props;

  return <Table
      style={{width: '100%'}}>
    <thead>
    <tr>
      <th>
        Group
      </th>
      <th>
        Multiplier
      </th>
      <th>
        ETH Earned <InfoTooltip>ETH earned by the operator through membership in the group.</InfoTooltip>
      </th>
      <th>
        Created At
      </th>
    </tr>
    </thead>
    <tbody>
    {memberships.map((membership: any) => {
      const {group} = membership;
      return <tr key={group.id}>
        <td>
          <Hash hash={group.pubKey} to={`/group/${group.id}`}>{getGroupName(group.id)}</Hash>
        </td>
        <td>
          {membership.count}
        </td>
        <td>
          <ETHTag/> <ETHValue unit={"eth"} wei={membership.reward}/>
        </td>
        <td><TimeToNow time={group.createdAt}/></td>
      </tr>
    })}
    </tbody>
  </Table>
}