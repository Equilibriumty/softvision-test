import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

function CreateIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      fill="none"
      viewBox="0 0 55 55"
      opacity="0.7"
    >
      <G filter="url(#filter0_d_0_1051)">
        <Circle
          cx="27.5"
          cy="27.5"
          r="12"
          stroke="#C2CED9"
          strokeOpacity="0.81"
          shapeRendering="crispEdges"
        ></Circle>
      </G>
      <Path
        fill="#FFFFFF"
        d="M30.962 26.462l-3.5.01v-3.434a.538.538 0 10-1.077 0l.01 3.424h-3.357a.538.538 0 100 1.076h3.347v3.424a.538.538 0 101.076 0v-3.424h3.5a.538.538 0 100-1.076z"
      ></Path>
    </Svg>
  );
}
// TODO FIX THIS ICON
export const MemoCreateIcon = React.memo(CreateIcon);
