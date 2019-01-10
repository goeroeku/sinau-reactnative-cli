import React, { Component } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

// styles
import { Colors, Metrics } from "../../Themes";

export default class RoundedTextInput extends Component {
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
          borderBottomColor: Colors.abuTengah,
          borderWidth: 0.3,
          borderRadius: Metrics.buttonRadius,
          padding: Metrics.baseMargin,
          marginBottom: Metrics.baseMargin,
          backgroundColor: Colors.abuMuda
        }}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}
