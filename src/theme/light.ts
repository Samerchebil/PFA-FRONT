import Typography from "./Typography";
import colors from "./colors";
import Colors from "./colors";

const theme = {
  spacing: {
    "0": 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128,
  },
  colors: {
    ...Colors.light,
  },
  TextInputVariants: {
    default: {
      borderRadius: 8,
      paddingHorizontal: 20,
      paddingVertical: 16,
      marginBottom: 10,
      backgroundColor: "#e1dfdf",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    outline: {
      borderColor: "#e1dfdf",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 20,
      paddingVertical: 16,
      marginBottom: 10,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128,
  },
  textVariants: {
    body: {
      ...Typography.body,
      color: Colors.light.text,
    },
    title: {
      ...Typography.Title,
    },
    hint: {
      ...Typography.hint,
      color: colors.light.hint,
    },
    error: {
      ...Typography.hint,
      color: colors.light.error,
    },
    h1: {
      ...Typography.h1,
    },
  },
};
export default theme;

export type Theme = typeof theme;
