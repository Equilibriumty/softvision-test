import React from "react";
import Svg, { Circle, G } from "react-native-svg";

function DotsIcon({ isFocused }) {
  const opacity = isFocused ? "1" : "0.7";
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#FFFFFF"
      viewBox="0 0 24 24"
      opacity={opacity}
    >
      <G fill="#fff" opacity={opacity}>
        <Circle cx="5.5" cy="12.5" r="1.5" />
        <Circle cx="11.5" cy="12.5" r="1.5" />
        <Circle cx="17.5" cy="12.5" r="1.5" />
      </G>
    </Svg>
  );
}

export const MemoDotsIcon = React.memo(DotsIcon);
