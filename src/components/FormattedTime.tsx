import {DateTime} from "luxon";
import React from "react";

export function TimeToNow(props: {
  time: string|number
}) {
  if (!props.time) {
    return null;
  }
  const dateTime = DateTime.fromSeconds(typeof props.time === 'string' ? parseInt(props.time) : props.time);

  // toRelative(): always contains a single unit, the options only allow you to switch to unrounded ("1.3 days"),
  // You can define a padding, but this does seem to only work right if your padding matches the time, i.e. you
  // have to know you are dealing with "months ago", for you to pad up to 10 days, say.
  const relString = dateTime.toRelative()

  // Or, we can use diffNow?
  // const diff = dateTime.diffNow(['days', 'hours', 'minutes', 'months', 'years'])
  // console.log(diff)

  return <span title={dateTime.toLocaleString(DateTime.DATETIME_FULL)}>
    {relString}
  </span>
}

export function FormattedTime(props: {
  time: string|number
}) {
  const dateTime = DateTime.fromSeconds(typeof props.time === 'string' ? parseInt(props.time) : props.time);
  return <span>{dateTime.toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
}