import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgWrapper = (props, d, width, height, fill) => (
  <Svg
    width={width}
    height={height}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path d={d} fill={fill} />
  </Svg>
);

export default SvgWrapper;
