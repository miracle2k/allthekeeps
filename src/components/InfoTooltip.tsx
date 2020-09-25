import * as React from "react"
import Tippy from "@tippyjs/react";

const InfoIcon = React.forwardRef((props: React.SVGProps<SVGSVGElement>, ref) => {
  return (
      <svg width="1em" height="1em" viewBox="0 0 48 48" {...props} ref={ref as any}>
        <path d="M24 3.998c-11.028 0-20 8.972-20 20 0 3.275.863 6.337 2.262 9.066l-2.168 7.762c-.505 1.804 1.278 3.587 3.082 3.082l7.767-2.168c2.728 1.396 5.785 2.258 9.057 2.258 11.028 0 20-8.972 20-20s-8.972-20-20-20zm0 3c9.406 0 17 7.594 17 17 0 9.406-7.594 17-17 17-3.002 0-5.81-.78-8.258-2.144a1.5 1.5 0 00-1.133-.135l-7.386 2.06 2.062-7.383a1.5 1.5 0 00-.135-1.134A16.89 16.89 0 017 23.998c0-9.406 7.594-17 17-17zM24 13c-3.296 0-6 2.704-6 6a1.5 1.5 0 103 0c0-1.674 1.326-3 3-3s3 1.326 3 3c0 1.586-.643 2.053-1.773 3.11-1.13 1.056-2.727 2.697-2.727 5.39a1.5 1.5 0 103 0c0-1.66.654-2.152 1.773-3.2C28.393 23.255 30 21.65 30 19c0-3.296-2.704-6-6-6zm0 18a2 2 0 000 4 2 2 0 000-4z" />
      </svg>
  )
});

export function InfoTooltip(props: {
  children: any,
  size?: number
}) {
  const size = props.size ? `${props.size}em` : '1em';
  return <Tippy content={props.children}>
    <InfoIcon width={size} height={size} />
  </Tippy>
}
