import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  buttonStyle: ViewStyle;
  titleTextStyle: TextStyle;
  buttonTextStyle: TextStyle;
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
    height: 45,
    width: "90%",
    marginTop: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5931FF",
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: "#A58FFF",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: "#fdfdfd",
    fontWeight: "700",
  },
});
