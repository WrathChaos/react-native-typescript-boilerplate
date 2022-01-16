import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { SCREENS } from "@shared-constants";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IHomeScreenProps {
  style?: CustomStyleProp;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ style }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        HomeScreen
      </Text>
      <RNBounceable
        style={styles.buttonStyle}
        onPress={() => NavigationService.navigate(SCREENS.DETAIL)}
      >
        <Text color={colors.white}>Go To Detail Screen</Text>
      </RNBounceable>
    </View>
  );
};

export default HomeScreen;
