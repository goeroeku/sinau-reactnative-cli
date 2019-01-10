import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

// styles
import { Colors, Metrics } from "../../Themes";

export default class TextViewCustom extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
  };

  getText() {
    const placeholder = this.props.placeholder || "";
    return placeholder;
  }

  render() {
    return (
      <View>
        <View style={styles.wraper}>
          <Text style={styles.label}>{this.props.label}</Text>
          <Text style={styles.value}>{this.props.value}</Text>
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = {
  wraper: {
    paddingTop: Metrics.smallMargin,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  label: {
    color: "black",
    width: "30%"
  },
  value: {
    width: "70%"
  },
  line: {
    borderBottomColor: Colors.abuTengah,
    borderBottomWidth: 0.5,
    paddingBottom: Metrics.smallMargin
  }
};
