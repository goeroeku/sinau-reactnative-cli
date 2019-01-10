import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import IntroSwiper from "../Elements/IntroSwiper";

// Styles
import Swiper from "react-native-swiper";
import { Fonts, Colors, Metrics } from "../../Themes/";

export default class IntroPage extends Component {
  render() {
    return (
      <Swiper
        style={stylesCurrent.wrapper}
        activeDot={
          <View
            style={{
              backgroundColor: Colors.hijau,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
      >
        <View>
          <IntroSwiper
            title="Pos Merchant"
            description="Aplikasi kasir untuk mengelola penjualan anda lebih modern, mudah
            dan praktis"
            jenis="1"
          />
        </View>
        <View>
          <IntroSwiper
            title="Membership"
            description="Anda bisa menerbitkan kartu member pelanggan anda dengan desain sendiri dan dapatkan manfaatnya"
            jenis="2"
          />
        </View>
        <View>
          <IntroSwiper
            title="PPOB dan Pulsa"
            description="Anda bisa berjualan Pulsa dan menerima pembayaran PPOB dan dapatkan komisinya"
            jenis="3"
          />
        </View>
      </Swiper>
    );
  }
}

const stylesCurrent = {
  wrapper: {}
};
