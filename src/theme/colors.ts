const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
const common = {
  white: "#fff",
  black: "#000",
  error: "#E71010",
};
const light = {
  ...common,
  text: "#000",
  background: "#fff",
  buttonBackground: "#1E1E1E",
  hint: "#9E9E9E",
  tint: tintColorLight,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorLight,
};
const dark = {
  ...common,
  text: "#fff",
  background: "#000",
  buttonBackground: "#1E1E1E",
  hint: "#9E9E9E",
  tint: tintColorDark,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorDark,
};

export default {
  light,
  dark,
};

export type Colors = typeof light;
