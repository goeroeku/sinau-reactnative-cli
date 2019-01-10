import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import axios from "axios";

//custom
import {
  RoundedButton,
  TextInput,
  RoundedTextInput
} from "../../Components/Elements";

//style
import { AppStyles, Metrics, Colors, Images, Fonts } from "../../Themes";

// env
import { API_URL } from "react-native-dotenv";

export default class UserEditScreen extends Component {
  constructor(props) {
    super(props);

    const { params } = props.navigation.state;

    this.state = {
      jwt: params.jwt,
      id: params.user.id,
      user: params.user
    };
  }

  async onSubmit() {
    if (
      this.state.user.name == "" ||
      this.state.user.username == "" ||
      this.state.user.email == ""
    ) {
      window.alert("Silakan lengkapi data terlebih dahulu !!!");
      return;
    }
    let cekMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (cekMail.test(this.state.user.email) == 0) {
      alert("Silakan gunakan email yang valid !!!");
      return;
    }
    var hasil = await axios
      .put(
        API_URL + "/api/user/" + this.state.id + "/basic",
        {
          name: this.state.user.name,
          username: this.state.user.username,
          email: this.state.user.email
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.state.jwt
          }
        }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });

    if (hasil.data && hasil.data.update) {
      alert("Data berhasil diubah ...");

      this.props.navigation.replace("UserScreen", {
        isUbah: true,
        jwt: this.state.jwt,
        user: this.state.user
      });
    } else {
      alert("Gagal edit ...");
    }
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <View style={styles.imageContainer}>
          <Image source={Images.logo} style={styles.imageProfile} />
          <Text
            style={[{ marginTop: Metrics.smallMargin }, Fonts.style.normal]}
          />
          <Text
            style={[
              {
                marginTop: Metrics.smallMargin,
                marginBottom: Metrics.baseMargin,
                color: Colors.hijau
              },
              Fonts.style.description
            ]}
          />
        </View>
        <View
          style={[
            {
              padding: Metrics.section,
              backgroundColor: Colors.abu,
              flex: 1
            }
          ]}
        >
          <RoundedTextInput
            placeholder="Name"
            value={this.state.user.name}
            onChangeText={text =>
              this.setState({
                user: {
                  id: this.state.user.id,
                  name: text,
                  username: this.state.user.username,
                  email: this.state.user.email
                }
              })
            }
          />
          <RoundedTextInput
            placeholder="Username"
            value={this.state.user.username}
            onChangeText={text =>
              this.setState({
                user: {
                  id: this.state.user.id,
                  name: this.state.user.name,
                  username: text,
                  email: this.state.user.email
                }
              })
            }
          />
          <RoundedTextInput
            placeholder="Email"
            value={this.state.user.email}
            onChangeText={text =>
              this.setState({
                user: {
                  id: this.state.user.id,
                  name: this.state.user.name,
                  username: this.state.user.username,
                  email: text
                }
              })
            }
          />
          <RoundedButton
            text="Simpan"
            aktif="1"
            onPress={() => this.onSubmit()}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  imageContainer: {
    //flex: 1,
    alignItems: "center",
    paddingTop: Metrics.doubleBaseMargin
  },
  imageProfile: {
    width: 75,
    height: 75,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.abu
  }
};
