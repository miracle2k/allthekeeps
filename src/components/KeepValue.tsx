import React, {useMemo} from "react";

export const keepFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0
});

export function KeepValue(props: {
  keep: number,
} | {raw: number}) {
  let keep: number;
  if ('raw' in props) {
    keep = props.raw / 10**18;
  } else {
    keep = props.keep;
  }

  return <>{keepFormatter.format(keep)}</>;
}
