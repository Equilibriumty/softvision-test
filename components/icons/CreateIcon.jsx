import React from "react";
import Svg, { Path } from "react-native-svg";

function CreateIcon({ isFocused }) {
  const opacity = isFocused ? "1" : "0.5";
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      height={25}
      width={25}
      fill="#FFFFFF"
      enableBackground="new 0 0 490.2 490.2"
      version="1.1"
      viewBox="0 0 490.2 490.2"
      xmlSpace="preserve"
      opacity={opacity}
    >
      <Path d="M418.5 418.5c95.6-95.6 95.6-251.2 0-346.8s-251.2-95.6-346.8 0-95.6 251.2 0 346.8 251.2 95.6 346.8 0zM89 89c86.1-86.1 226.1-86.1 312.2 0s86.1 226.1 0 312.2-226.1 86.1-312.2 0S3 175.1 89 89z"></Path>
      <Path d="M245.1 336.9c3.4 0 6.4-1.4 8.7-3.6 2.2-2.2 3.6-5.3 3.6-8.7v-67.3h67.3c3.4 0 6.4-1.4 8.7-3.6 2.2-2.2 3.6-5.3 3.6-8.7 0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2-6.8 0-12.3 5.5-12.2 12.2v67.3h-67.3c-6.8 0-12.3 5.5-12.2 12.2 0 6.8 5.5 12.3 12.2 12.2h67.3v67.3c-.3 6.9 5.2 12.4 12 12.4z"></Path>
    </Svg>
  );
}
// TODO FIX THIS ICON
export const MemoCreateIcon = React.memo(CreateIcon);
