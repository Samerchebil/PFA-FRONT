import React from "react";
import { View, StyleSheet, ViewProps, FlexAlignType } from "react-native";

interface Props extends ViewProps {
  spacing?: number;
  direction: "row" | "column";
  children: React.ReactNode;
  justifyContent:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  alignItems: FlexAlignType | undefined;
}
interface StackProps extends ViewProps {
  spacing?: number;
  children: React.ReactNode;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  alignItems?: FlexAlignType | undefined;
}

export const FlexBox: React.FC<Props> = ({
  spacing,
  direction,
  justifyContent,
  alignItems,
  children,
  style,
}) => {
  const ViewStyle = StyleSheet.flatten([
    {
      gap: spacing,
      flexDirection: direction,
      justifyContent,
      alignItems,
    },
    style,
  ]);
  return <View style={ViewStyle}>{children}</View>;
};
export const VStack: React.FC<StackProps> = ({
  spacing,
  children,
  justifyContent,
  alignItems,
  style,
}) => {
  return (
    <FlexBox
      spacing={spacing}
      justifyContent={justifyContent}
      alignItems={alignItems}
      direction="column"
      style={style}
    >
      {children}
    </FlexBox>
  );
};
export const HStack: React.FC<StackProps> = ({
  spacing,
  children,
  justifyContent,
  alignItems,
  style,
}) => {
  return (
    <FlexBox
      spacing={spacing}
      justifyContent={justifyContent}
      alignItems={alignItems}
      direction="row"
      style={style}
    >
      {children}
    </FlexBox>
  );
};
