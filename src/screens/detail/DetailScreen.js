import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./DetailScreen.style";

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> DetailScreen </Text>
        <TouchableOpacity
          style={{
            height: 35,
            width: "90%",
            marginTop: 32,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5931FF",
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={{ color: "#fdfdfd", fontWeight: "700" }}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
