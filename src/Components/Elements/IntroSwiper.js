import React, { Component } from "react";
import { Text, Image, View } from "react-native";

// Styles
import { Fonts, Colors, Metrics, Images } from "../../Themes/";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../Utils/Dimensions";

export default class IntroSwiper extends Component {
  render() {
    let gambarIntro = Images.intro1;
    let titleColor = Colors.ungu;
    if (this.props.jenis == 2) {
      titleColor = Colors.hijau;
      gambarIntro = Images.intro2;
    } else if (this.props.jenis == 3) {
      titleColor = Colors.abuTengah;
      gambarIntro = Images.intro3;
    }

    return (
      <View style={[stylesCurrent.slide]}>
        <View style={[stylesCurrent.centered, {}]}>
          <Image source={gambarIntro} style={stylesCurrent.bannerIntro} />
        </View>

        <Text style={[stylesCurrent.textTitle, { color: titleColor }]}>
          {this.props.title}
        </Text>

        <Text style={[stylesCurrent.textDescription, {}]}>
          {this.props.description}
        </Text>
      </View>
    );
  }
}

const stylesCurrent = {
  wrapper: {},
  slide: {
    alignItems: "center",
    margin: Metrics.baseMargin,
    textAlign: "center",
    height: Metrics.screenHeight
  },
  textTitle: {
    fontWeight: "bold",
    marginBottom: Metrics.smallMargin
  },
  textDescription: {
    textAlign: "center",
    fontSize: Fonts.size.small,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin
  },
  centered: {
    alignItems: "center"
  },
  bannerIntro: {
    height: 250,
    resizeMode: "contain",
    margin: Metrics.doubleBaseMargin
  }
};
