import React from "react";
import Svg, { G, Path } from "react-native-svg";

function JoinIcon({ isFocused }) {
  const fillColor = isFocused ? "#23CFF2" : "#C2CED9CF";
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <G filter="url(#filter0_d_112_48)">
        <Path
          fill={fillColor}
          fillRule="evenodd"
          d="M19.738 21.676H1.676a.664.664 0 01-.676-.65c0-3.97 2.615-7.514 6.502-8.814l.262-.088-.222-.165C6.25 11 5.513 9.552 5.513 8 5.513 5.242 7.845 3 10.713 3c2.867 0 5.199 2.242 5.189 4.999 0 1.563-.737 3-2.03 3.96l-.222.165.263.088c3.887 1.3 6.502 4.843 6.502 8.813 0 .36-.303.65-.677.65zm.687-12.153c0 .36-.303.65-.676.65-.374 0-.687-.29-.687-.65v-.864h-.899a.664.664 0 01-.676-.65c0-.36.303-.65.677-.65h.908v-.865c0-.359.303-.65.677-.65.373 0 .676.291.676.65v.864h.899c.373 0 .676.292.676.65 0 .36-.303.651-.676.651h-.899v.864z"
          clipRule="evenodd"
        ></Path>
      </G>
    </Svg>
  );
}

export const MemoJoinIcon = React.memo(JoinIcon);
