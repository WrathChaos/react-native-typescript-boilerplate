import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/services/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";

console.disableYellowBox = true;

const App = () => {
  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
