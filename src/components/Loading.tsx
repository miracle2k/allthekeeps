import React from 'react';

const Loading = ({ className, ...props }: any) => (
    <svg width={"1em"} height={"1em"} stroke="black" viewBox="0 0 38 38" className={`svg-loaders-svg${className ? ` ${className}` : ''}`} {...props}>
      <g
          transform="translate(1 1)"
          strokeWidth={2}
          fill="none"
          fillRule="evenodd"
      >
        <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
);


export { Loading };