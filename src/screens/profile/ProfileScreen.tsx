import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./ProfileScreen.style";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileScreen;
