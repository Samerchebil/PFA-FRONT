import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Compass = (props: SvgProps) => (
  <Svg width={30} height={31} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      d="m21.325 8.109-8.458 3.865a1.871 1.871 0 0 0-.924.924l-3.865 8.458c-.446.975.559 1.98 1.535 1.535l8.457-3.865c.41-.187.737-.515.924-.924l3.866-8.458c.446-.976-.56-1.98-1.535-1.535Zm-4.533 8.714a1.871 1.871 0 1 1-2.646-2.646 1.871 1.871 0 0 1 2.646 2.646ZM15.469.969C7.443.969.938 7.474.938 15.5s6.505 14.531 14.53 14.531C23.495 30.031 30 23.526 30 15.5S23.494.969 15.469.969Zm0 26.25C9.007 27.219 3.75 21.962 3.75 15.5S9.007 3.781 15.469 3.781c6.461 0 11.719 5.257 11.719 11.719s-5.258 11.719-11.72 11.719Z"
    />
  </Svg>
);
export default Compass;