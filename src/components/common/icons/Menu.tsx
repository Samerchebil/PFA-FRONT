import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const Menu = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Circle cx={4} cy={4} r={4} fill={props.color} />
    <Circle cx={26} cy={4} r={4} fill={props.color} />
    <Circle cx={4} cy={26} r={4} fill={props.color} />
    <Circle cx={26} cy={26} r={4} fill={props.color} />
  </Svg>
);
export default Menu;
