import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import colors from "@colors";
import styles from "./DetailScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1>Detail Screen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => NavigationService.goBack()}
        >
          <Text color={colors.light.white}>Go back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
