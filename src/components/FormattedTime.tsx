import {DateTime, Duration} from "luxon";
import React from "react";

export function dateTimeFrom(time: string|number|DateTime) {
  if (time instanceof DateTime) {
    return time;
  }
  return DateTime.fromSeconds(typeof time === 'string' ? parseInt(time) : time);
}

export function TimeToNow(props: {
  time: string|number
}) {
  if (!props.time) {
    return null;
  }
  const dateTime = dateTimeFrom(props.time);

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

export function formatSeconds(seconds: number) {
  if (seconds < 120) {
    return Duration.fromObject({seconds }).toFormat("s's'")
  }
  else if (seconds < 3600 + 1800) {
    return Duration.fromObject({seconds }).toFormat("m'm' s's'")
  }
  else if (seconds < (3600 * 24 * 1.5)) {
    return Duration.fromObject({seconds }).toFormat("h'h' m'm'")
  }
  else {
    return Duration.fromObject({seconds }).toFormat("d'd 'h'h'")
  }
}


export function FormattedTime(props: {
  time: string|number|DateTime,
  format: 'long'|'simple'
}) {
  const dateTime = dateTimeFrom(props.time);

  const longFormat = { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  let formatOpts = props.format === 'long' ?
      longFormat
      : props.format === 'simple'
          ? { month: 'short', day: '2-digit' }
          : props.format;

  const tooltip = props.format === 'long' ? "" : dateTime.toLocaleString(longFormat);
  return <span title={tooltip}>
    {dateTime.toLocaleString(formatOpts)}
  </span>
}
FormattedTime.defaultProps = {
  format: 'long'
};


export function TimeBetween(props: {
  earlier: string|number
  later: string|number
}) {
  if (!props.earlier || !props.later) {
    return null;
  }
  const earlier = dateTimeFrom(props.earlier);
  const later = dateTimeFrom(props.later);

  // Or, we can use diffNow?
  // const diff = dateTime.diffNow(['days', 'hours', 'minutes', 'months', 'years'])
  const diff = later.diff(earlier, ['seconds'])

  // <Gray>s</Gray>
  return <span title={later.toLocaleString(DateTime.DATETIME_FULL)}>
    {formatSeconds(diff.seconds)}
  </span>
}

function Gray(props: {children: any}) {
  return <span style={{color: 'gray'}}>{props.children}</span>
}