import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Position = (props: SvgProps) => (
  <Svg width={35} height={36} fill="none" {...props}>
    <Path
      fill={props.color || "#fff"}
      d="m8.531 14.756 10.929 1.472 1.339 10.605 8.087-20.219L8.53 14.756Zm-4.41 1.612a1.094 1.094 0 0 1-.262-2.1L30.443 3.637a1.094 1.094 0 0 1 1.422 1.422L21.258 31.57a1.093 1.093 0 0 1-2.1-.267L17.5 18.171 4.121 16.368Z"
    />
  </Svg>
);
export default Position;
