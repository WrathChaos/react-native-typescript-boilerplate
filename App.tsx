import "react-native-gesture-handler";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import SplashScreen from "react-native-splash-screen";
/**
 * ? Local Imports
 */
import Navigation from "./src/services/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";

console.disableYellowBox = true;

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme]);

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
