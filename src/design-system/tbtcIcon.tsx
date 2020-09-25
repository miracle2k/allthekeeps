import * as React from "react"

export const TBTCIcon = React.forwardRef((props: React.SVGProps<SVGSVGElement>, ref) => {
  return (
      <svg width="1em" height="1em" viewBox="0 0 56 56" {...props} ref={ref as any}>
        <circle cx={28} cy={28} r={25.5} stroke="#0A0806" fill={"white"} strokeWidth={5} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 26h-8v4h8v10h4V30h8v-4H26z"
            fill="#0A0806"
        />
        <circle cx={28} cy={19} r={3} fill="#0A0806" />
      </svg>
  )
});
