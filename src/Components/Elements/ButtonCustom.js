import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";

// styles
import { Colors, Metrics, Fonts } from "../../Themes";

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  };

  getText() {
    const buttonText = this.props.text || this.props.children || "";
    return buttonText;
  }

  render() {
    let buttonColor = styles.colorAktif;
    let buttonTextColor = styles.colorTextAktif;

    if (this.props.aktif == null || this.props.aktif != 1) {
      buttonColor = styles.colorNonAktif;
      buttonTextColor = styles.colorTextNonAktif;
    }

    return (
      <TouchableOpacity
        style={[styles.button, buttonColor]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.buttonText, buttonTextColor]}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  colorAktif: {
    backgroundColor: Colors.pink
  },
  colorNonAktif: {
    backgroundColor: Colors.clear,
    borderColor: Colors.background,
    borderWidth: 0.3
  },
  button: {
    height: 45,
    justifyContent: "center"
  },
  buttonText: {
    color: Colors.snow,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.smallMargin
  },
  colorTextAktif: {
    color: Colors.abuMuda
  },
  colorTextNonAktif: {
    color: Colors.charcoal
  }
};
