import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  buttonStyle: ViewStyle;
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 35,
    width: "90%",
    marginTop: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5931FF",
  },
});
