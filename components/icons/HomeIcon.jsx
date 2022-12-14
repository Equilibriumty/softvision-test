import React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon({ isFocused }) {
  const opacity = isFocused ? "1" : "0.7";
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
      opacity={opacity}
    >
      <Path
        fill="#fff"
        d="M19.462 8.7L11.305.539A1.822 1.822 0 0010 0c-.498 0-.956.19-1.305.538L.548 8.69l-.01.01a1.838 1.838 0 001.225 3.136h.388v6.003c0 1.184.967 2.15 2.152 2.15H7.5a.582.582 0 00.588-.587v-4.71c0-.537.438-.985.986-.985h1.882c.538 0 .986.438.986.986v4.719c0 .318.26.587.588.587h3.197a2.155 2.155 0 002.151-2.15v-6.003h.3c.487 0 .956-.19 1.304-.538a1.869 1.869 0 00-.02-2.608zm-.826 1.773c-.13.13-.3.199-.479.199h-.886a.582.582 0 00-.588.587v6.59a.988.988 0 01-.986.986h-2.61v-4.121c0-1.185-.966-2.15-2.15-2.15H9.063a2.155 2.155 0 00-2.152 2.15v4.121h-2.61a.988.988 0 01-.985-.985v-6.6a.582.582 0 00-.588-.588h-.906a.61.61 0 01-.458-.2.673.673 0 010-.945l8.157-8.153a.671.671 0 01.956 0l8.158 8.153a.685.685 0 010 .956z"
      ></Path>
    </Svg>
  );
}

export const MemoHomeIcon = React.memo(HomeIcon);
