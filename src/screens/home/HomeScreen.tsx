import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import styles from "./HomeScreen.style";
import { SCREENS } from "@shared-constants";

interface IProps {}

interface IState {}

export default class HomeScreen extends Component<IProps, IState> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTextStyle}> HomeScreen </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => NavigationService.navigate(SCREENS.DETAIL)}
        >
          <Text style={styles.buttonTextStyle}>Go To Detail Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
