import React, {useMemo} from "react";

export function DollarValue(props: {
  dollar: number,
  showCents?: boolean
}) {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 });
  }, []);

  return <>{formatter.format(props.dollar)}</>;
}
