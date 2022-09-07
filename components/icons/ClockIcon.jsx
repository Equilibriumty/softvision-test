import React from "react";
import Svg, { Path } from "react-native-svg";

function ClockIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 8 8"
    >
      <Path
        fill="#ABBBCB"
        d="M4 0C1.794 0 0 1.794 0 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm1.903 6.069a.331.331 0 01-.472 0L3.764 4.403a.332.332 0 01-.097-.236V2a.333.333 0 01.666 0v2.028l1.569 1.569a.333.333 0 01.001.472z"
      ></Path>
    </Svg>
  );
}

export const MemoClockIcon = React.memo(ClockIcon);
