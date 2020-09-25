import {DateTime} from "luxon";
import React from "react";

export function FormattedTime(props: {
  time: string
}) {
  const dateTime = DateTime.fromSeconds(parseInt(props.time));
  return <span title={dateTime.toLocaleString(DateTime.DATETIME_FULL)}>{dateTime.toRelative()}</span>
}