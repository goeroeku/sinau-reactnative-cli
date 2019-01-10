import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

// styles
import { Colors, Metrics, Fonts } from "../../Themes";

export default class HeaderSection extends Component {
  static propTypes = {
    label: PropTypes.string
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.abu,
          padding: Metrics.baseMargin,
          paddingLeft: Metrics.doubleBaseMargin,
          paddingRight: Metrics.doubleBaseMargin
        }}
      >
        <Text
          style={[
            { color: Colors.abuTengah, fontWeight: "bold" },
            Fonts.style.normal
          ]}
        >
          {this.props.label}
        </Text>
      </View>
    );
  }
}
