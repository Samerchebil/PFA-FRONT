export const fonts = {
  default: "LATO_REGULAR",
};

const Typography = {
  Title: {
    fontSize: 36,
    fontWeight: "700",
    // letterSpacing: "-0.4px",
    textTransform: "capitalize",
    fontFamily: fonts.default,
  },
  body: {
    fontFamily: fonts.default,
    fontSize: 16,
    // fontWeight: "400",
  },
  hint: {
    fontFamily: fonts.default,
    fontSize: 14,
    // fontWeight: "400",
  },
  h1: {
    fontFamily: fonts.default,
    fontSize: 18,
    fontWeight: "700",
  },
};

export default Typography;
export type Typography = typeof Typography;
