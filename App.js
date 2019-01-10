import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

//custom
import Launcher from "./src/Containers/Launcher";

//styles
import { Metrics, Colors } from "./src/Themes/";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Launcher />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  wrapper: {}
};
