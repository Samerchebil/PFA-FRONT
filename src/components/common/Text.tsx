import React from "react";
import { Text as DefualtText, StyleSheet, TextStyle } from "react-native";

import { ColorsType, LightTheme } from "../../theme";
import { useTheme } from "../../context";

interface Props {
  children: React.ReactNode;
  variant?: keyof typeof LightTheme.textVariants;
  color?: keyof ColorsType;
  style?: TextStyle;
  align?: "auto" | "left" | "right" | "center" | "justify" | undefined;
}

export const Text: React.FC<Props> = ({
  children,
  variant = "body",
  color = "text",
  style,
  align,
}) => {
  const {
    theme: { textVariants, colors },
  } = useTheme();
  const textStyle = StyleSheet.flatten([
    textVariants[variant],
    {
      color: colors[color],
      textAlign: align,
    },
    style,
  ]);
  return <DefualtText style={textStyle}>{children}</DefualtText>;
};
