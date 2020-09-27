import {DateTime} from "luxon";
import React from "react";

export function TimeToNow(props: {
  time: string|number
}) {
  const dateTime = DateTime.fromSeconds(typeof props.time === 'string' ? parseInt(props.time) : props.time);
  return <span title={dateTime.toLocaleString(DateTime.DATETIME_FULL)}>{dateTime.toRelative()}</span>
}

export function FormattedTime(props: {
  time: string|number
}) {
  const dateTime = DateTime.fromSeconds(typeof props.time === 'string' ? parseInt(props.time) : props.time);
  return <span>{dateTime.toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
}