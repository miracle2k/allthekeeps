import {css} from "emotion";
import {InfoTooltip} from "./InfoTooltip";
import React, {Fragment} from "react";

type Property = {
  key: string,
  label: string,
  tooltip?: string,
  value: any
};

type PropertyList = (Property|undefined)[];

type GroupList = {title: string, properties: PropertyList}[];

function isGroupList(data: PropertyList|GroupList): data is GroupList {
  if (data.length && data[0] && "properties" in data[0]) {
    return true;
  }
  return false;
}


export function PropertyTable(props: {
  data: PropertyList|GroupList,
  style?: any
}) {
  const groupList = isGroupList(props.data) ? props.data : [{title: "", properties: props.data}];

  return <table
    style={props.style}
    className={css`
      color: #0A0806;
      
      & td, th {
        font-weight: normal;
        padding: 5px;
        text-align: left;
        vertical-align: top;
      }
      
      tbody.indented th:first-child {
        padding-left: 20px;
      }
    `}
  >
    {groupList.map(group => {
      const props = group.properties.map(row => {
        if (!row) {
          return null;
        }
        return <tr key={row.key}>
          <th>
            {row.label} {row.tooltip ? <InfoTooltip>{row.tooltip}</InfoTooltip> : null}
          </th>
          <td>{row.value}</td>
        </tr>
      })

      return <Fragment key={group.title}>
        {group.title ? <tbody>
          <tr>
            <th style={{fontWeight:'bold'}} colSpan={2}>{group.title}</th>
          </tr>
        </tbody> : null}

        <tbody className={group.title ? "indented" : ""}>
          {props}
        </tbody>
      </Fragment>
    })}
  </table>
}