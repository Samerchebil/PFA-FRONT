import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Home = (props: SvgProps) => (
  <Svg width={30} height={31} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      d="M13.425 3.555a2.5 2.5 0 0 1 3.15 0l9.535 7.725a3.75 3.75 0 0 1 1.39 2.91V25.5A2.5 2.5 0 0 1 25 28h-3.75a2.5 2.5 0 0 1-2.5-2.5v-6.25A1.25 1.25 0 0 0 17.5 18h-5a1.25 1.25 0 0 0-1.25 1.25v6.25a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5V14.193a3.75 3.75 0 0 1 1.39-2.915l9.535-7.723Z"
    />
  </Svg>
);
export default Home;
