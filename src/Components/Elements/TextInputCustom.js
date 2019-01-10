import React, { Component } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

// styles
import { Colors, Metrics } from "../../Themes";

export default class TextInputCustom extends Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

  getText() {
    const placeholder = this.props.placeholder || "";
    return placeholder;
  }

  render() {
    return (
      <TextInput
        style={{
          borderBottomColor: Colors.hijau,
          borderWidth: 0.5,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          padding: Metrics.smallMargin,
          marginBottom: Metrics.baseMargin
        }}
        secureTextEntry={this.props.type === "password" ? true : false}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}
