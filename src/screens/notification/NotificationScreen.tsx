import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";
import createStyles from "./NotificationScreen.style";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Notification
      </Text>
    </View>
  );
};

export default ProfileScreen;
