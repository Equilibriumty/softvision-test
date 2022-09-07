import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SportsIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="22"
      fill="none"
      viewBox="0 0 27 22"
    >
      <Path
        fill="#fff"
        d="M24.852 6.753a6.247 6.247 0 00-3.389-1.728c.069-.06.128-.13.197-.19.648-.653 1.126-1.41 1.357-2.123.273-.86.17-1.6-.308-2.081-.298-.301-.708-.456-1.194-.456-.922 0-2.032.568-2.98 1.522-1.092 1.1-1.621 2.365-1.485 3.31h-1.886a5.486 5.486 0 00-3.918 1.634L.603 17.355l-.017.017a.652.652 0 000 .912l2.97 2.992c.12.12.282.19.452.19h.06l5.155-.5c.026 0 .06-.008.086-.017.008 0 .008 0 .017-.008.051-.017.102-.035.154-.06.008 0 .008-.009.017-.009.017-.009.034-.026.06-.034.008 0 .008-.009.016-.009.018-.017.035-.034.06-.052v-.008l.009-.009c.017-.017.025-.034.042-.051 0-.009.009-.009.009-.017a.48.48 0 00.077-.147v-.017a.253.253 0 00.017-.077v-.009c.008-.026.008-.052.008-.077v-.017-.07-.016c0-.026-.008-.052-.008-.078v-.017c-.009-.026-.009-.043-.017-.069 0 0 0-.008-.009-.017-.008-.026-.017-.052-.034-.077 0 0 0-.009-.008-.009a.262.262 0 00-.043-.06c0-.009-.009-.009-.009-.017-.017-.026-.034-.043-.05-.06L7.097 17.32l9.415-9.476a5.524 5.524 0 012.961-1.548h1.784c.99.172 1.93.628 2.69 1.376a5.268 5.268 0 011.552 3.99 5.2 5.2 0 01-1.937 3.835c-1.605 1.307-3.91 1.513-5.744.507l-.052-.026c-1.997-1.126-4.404-.808-5.991.783l-.854.868a.652.652 0 000 .912.64.64 0 00.905 0l.862-.869c1.178-1.186 2.97-1.41 4.464-.567l.06.034c2.279 1.256 5.155.998 7.16-.636a6.559 6.559 0 002.408-4.772 6.524 6.524 0 00-1.93-4.979zM18.399 4.99c-.23-.232 0-1.307 1.058-2.382.786-.79 1.605-1.143 2.075-1.143.076 0 .213.008.281.077.094.095.12.361-.008.774-.163.516-.547 1.1-1.05 1.608-.606.61-1.23.954-1.699 1.083h-.64c0-.008-.008-.017-.017-.017zm-5.36 4.532h-1.665c-.35 0-.64.292-.64.645 0 .352.29.645.64.645h.384L5.903 16.71l-1.989.19a.644.644 0 00-.571.705c.034.352.35.619.7.576l1.92-.19.094.095 1.707 1.72-3.5.344-2.304-2.322L12.143 7.553a4.227 4.227 0 013.013-1.256h1.178c-.257.19-.496.404-.726.637l-2.57 2.588z"
      ></Path>
    </Svg>
  );
}

export const MemoSportsIcon = React.memo(SportsIcon);
