import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Recycle = (props: SvgProps) => (
  <Svg width={49} height={49} fill="none" {...props}>
    <Path
      fill={props.color || "#D8F862"}
      d="m44.109 31.34-5 8.66a4.946 4.946 0 0 1-4.64 2.5h-4v4l-5-9 5-9v4h5.64l-4.44-7.7 8.66-5 3.6 6.24c1.04 1.54 1.18 3.6.18 5.3ZM18.889 6.62h10c1.96 0 3.66 1.14 4.48 2.78l2 3.48 3.46-2-5.28 8.82-10.3.18 3.46-2-2.82-4.9-4.42 7.7-8.68-5 3.6-6.24c.82-1.66 2.52-2.82 4.5-2.82Zm-8.32 33.4-5-8.66c-.98-1.7-.84-3.74.18-5.28l2-3.46-3.46-2 10.28.16 5.3 8.84-3.46-2-2.82 4.88h8.88v10h-7.2a5.02 5.02 0 0 1-4.7-2.48Z"
    />
  </Svg>
);
export default Recycle;
