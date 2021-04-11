import React, { Component } from "react";
import { View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SearchScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1> SearchScreen </Text>
      </View>
    );
  }
}
