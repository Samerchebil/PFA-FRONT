import React from "react";
import { View, ViewProps } from "react-native";
import Svg, { Path, PathProps } from "react-native-svg";

interface EyePropsIcon extends ViewProps {
  width: number;
  height: number;
  color: string;
}

const EyeOffIcon: React.FC<EyePropsIcon> = ({
  width,
  height,
  color,
  ...rest
}) => {
  return (
    <View {...rest}>
      <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
          d="M11.83 9L15 12.16V12a3 3 0 00-3-3h-.17zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 003 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 01-5-5c0-.79.2-1.53.53-2.2zM2 4.27l2.28 2.28.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22 21 20.73 3.27 3M12 7a5 5 0 015 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default EyeOffIcon;
