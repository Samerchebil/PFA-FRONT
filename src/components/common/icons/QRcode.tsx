import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const QrCode = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path fill="#D8F862" d="M5 5h5v5H5V5Z" />
    <Path
      fill="#D8F862"
      d="M15 0v15H0V0h15Zm-2.5 2.5h-10v10h10v-10ZM10 30H5v5h5v-5Z"
    />
    <Path
      fill="#D8F862"
      d="M15 25v15H0V25h15ZM2.5 27.5v10h10v-10h-10ZM30 5h5v5h-5V5Z"
    />
    <Path
      fill="#D8F862"
      d="M25 0v15h15V0H25Zm12.5 2.5v10h-10v-10h10ZM20 2.5V0h2.5v5H20v5h-2.5V2.5H20ZM20 15v-5h2.5v5H20Zm-5 5v-2.5h2.5V15H20v5h2.5v-2.5H35V20H25v2.5h-7.5V20H15Zm0 0v2.5H5V20H2.5v2.5H0v-5h7.5V20H15Zm25 2.5h-2.5v-5H40v5Zm-2.5 0H35v5h5V25h-2.5v-2.5Zm-10 0h5V25H30v2.5h-2.5v-5Zm5 7.5v-2.5H30V30h-2.5v2.5h-5V35H30v-5h2.5Zm0 0H40v2.5h-5V35h-2.5v-5Zm-10-2.5V30H25v-5h-7.5v2.5h5Z"
    />
    <Path
      fill="#D8F862"
      d="M17.5 30H20v7.5h10V40H17.5V30ZM40 35v5h-7.5v-2.5h5V35H40Z"
    />
  </Svg>
);
export const QrCodeSm = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path fill="#000" d="M3.75 3.75H7.5V7.5H3.75V3.75Z" />
    <Path
      fill="#000"
      d="M11.25 0v11.25H0V0h11.25ZM9.375 1.875h-7.5v7.5h7.5v-7.5ZM7.5 22.5H3.75v3.75H7.5V22.5Z"
    />
    <Path
      fill="#000"
      d="M11.25 18.75V30H0V18.75h11.25Zm-9.375 1.875v7.5h7.5v-7.5h-7.5ZM22.5 3.75h3.75V7.5H22.5V3.75Z"
    />
    <Path
      fill="#000"
      d="M18.75 0v11.25H30V0H18.75Zm9.375 1.875v7.5h-7.5v-7.5h7.5ZM15 1.875V0h1.875v3.75H15V7.5h-1.875V1.875H15Zm0 9.375V7.5h1.875v3.75H15ZM11.25 15v-1.875h1.875V11.25H15V15h1.875v-1.875h9.375V15h-7.5v1.875h-5.625V15H11.25Zm0 0v1.875h-7.5V15H1.875v1.875H0v-3.75h5.625V15h5.625ZM30 16.875h-1.875v-3.75H30v3.75Zm-1.875 0H26.25v3.75H30V18.75h-1.875v-1.875Zm-7.5 0h3.75v1.875H22.5v1.875h-1.875v-3.75Zm3.75 5.625v-1.875H22.5V22.5h-1.875v1.875h-3.75v1.875H22.5V22.5h1.875Zm0 0H30v1.875h-3.75v1.875h-1.875V22.5Zm-7.5-1.875V22.5h1.875v-3.75h-5.625v1.875h3.75Z"
    />
    <Path
      fill="#000"
      d="M13.125 22.5H15v5.625h7.5V30h-9.375v-7.5ZM30 26.25V30h-5.625v-1.875h3.75V26.25H30Z"
    />
  </Svg>
);
