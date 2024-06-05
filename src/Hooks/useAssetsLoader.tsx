import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";

export default () => {
  const [fontLoaded] = useFonts({
    LATO_REGULAR: require("../../assets/fonts/Lato/Lato-Regular.ttf"),
  });
  const colorScheme = useColorScheme();
  const isLoading = !fontLoaded || !colorScheme;

  return [isLoading];
};
