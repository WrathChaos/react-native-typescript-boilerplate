import React, { useMemo } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
import type { ICardItem } from "@services/models";
import Text from "@shared-components/text-wrapper/TextWrapper";
import createStyles from "./CardItem.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
  onPress: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { name, description, language, star, fork } = data;

  const renderHeader = () => (
    <>
      <Text h4 bold color={colors.text}>
        {name}
      </Text>
      <Text h5 color={colors.placeholder} style={styles.descriptionTextStyle}>
        {description}
      </Text>
    </>
  );

  const renderLanguage = () => (
    <View style={styles.languageContainer}>
      <View style={styles.languageColorStyle} />
      <Text style={styles.valueTextStyle}>{language}</Text>
    </View>
  );

  const renderStar = () => (
    <View style={styles.starContainer}>
      <Icon name="star-o" type={IconType.FontAwesome} color={colors.text} />
      <Text style={styles.valueTextStyle}>{star}</Text>
    </View>
  );

  const renderFork = () => (
    <View style={styles.forkContainer}>
      <Icon name="code-fork" type={IconType.FontAwesome} color={colors.text} />
      <Text style={styles.valueTextStyle}>{fork}</Text>
    </View>
  );

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      {renderHeader()}
      <View style={styles.contentContainer}>
        {renderLanguage()}
        {renderStar()}
        {renderFork()}
      </View>
    </RNBounceable>
  );
};

export default CardItem;
