import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
