import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./SearchScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Search
      </Text>
    </View>
  );
};

export default SearchScreen;
