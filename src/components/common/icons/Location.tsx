import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Location = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill={props.color || "#fff"}
      d="M20 3.214a13.929 13.929 0 0 1 13.929 13.929c0 5.886-4.136 12.3-12.3 19.311a2.5 2.5 0 0 1-3.262-.003l-.54-.468c-7.803-6.829-11.756-13.086-11.756-18.84A13.929 13.929 0 0 1 20 3.214Zm0 8.572A5.357 5.357 0 1 0 20 22.5a5.357 5.357 0 0 0 0-10.714Z"
    />
  </Svg>
);
export default Location;
