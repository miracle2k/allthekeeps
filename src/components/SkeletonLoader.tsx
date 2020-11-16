import React from "react";
import {css} from "emotion";


const skeletonLineStyle = css`
  width: 140px;
  height: 16px;
  border-radius: 3px;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee 0px, #e8e8e8 40px, #eee 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;
  
  @keyframes shine-lines {
    0% {
      background-position: -100px;
    }
    40%, 100% {
      background-position: 140px;
    }
  }
`;

const skeletonAvatarStyle =`
  width: 52px;
  height: 52px;
  background-color: #ccc;
  border-radius: 25%;
  margin: 8px;
  background-image: linear-gradient(90deg, #eee 0px, #e8e8e8 40px, #eee 80px);
  background-size: 600px;
  animation: shine-avatar 1.6s infinite linear;

@keyframes shine-avatar {
  0% {
    background-position: -32px;
  }
  40%, 100% {
    background-position: 208px;
  }
}

`;


export function SkeletonTableRow(props: {
  columns: number
}) {
  return <tr>
    {Array(props.columns).fill(1).map((_, idx) => {
      return <td key={idx}>
        <div className={skeletonLineStyle} />
      </td>;
    })}
  </tr>
}