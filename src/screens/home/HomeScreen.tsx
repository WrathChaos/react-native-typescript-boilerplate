import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import colors from "@colors";
import styles from "./HomeScreen.style";
import { SCREENS } from "@shared-constants";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface IProps {}

interface IState {}

export default class HomeScreen extends Component<IProps, IState> {
  render() {
    return (
      <View style={styles.container}>
        <Text h1> HomeScreen </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => NavigationService.navigate(SCREENS.DETAIL)}
        >
          <Text color={colors.light.white}>Go To Detail Screen</Text>
        </TouchableOpacity>
        <Text h5></Text>
      </View>
    );
  }
}
