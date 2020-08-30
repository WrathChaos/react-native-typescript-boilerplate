import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./HomeScreen.style";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 32 }}> HomeScreen </Text>
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
          onPress={() => this.props.navigation.navigate("Detail")}
        >
          <Text style={{ color: "#fdfdfd", fontWeight: "700" }}>
            Go To Detail Screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
