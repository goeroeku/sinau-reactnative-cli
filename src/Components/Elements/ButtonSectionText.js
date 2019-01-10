import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View } from "react-native";

// styles
import { Colors, Metrics, Fonts } from "../../Themes";

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    label: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  };

  getText() {
    const buttonText = this.props.label || this.props.children || "";
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
      <TouchableOpacity style={styles.wraper} onPress={this.props.onPress}>
        <Text style={[Fonts.style.normal, this.props.style]}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  wraper: {
    padding: Metrics.baseMargin,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
    borderColor: Colors.abu,
    borderWidth: 0.5,
    borderTopWidth: 0,
    flex: 1
  }
};
