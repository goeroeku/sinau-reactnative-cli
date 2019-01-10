import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

//custom
import { RoundedButton, TextInput } from "../../Components/Elements/";

//style
import { AppStyles, Metrics, Colors } from "../../Themes";

// env
import { API_URL } from "react-native-dotenv";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", username: "", email: "", password: "" };
  }

  async registerHandle() {
    if (
      this.state.name == "" ||
      this.state.username == "" ||
      this.state.email == "" ||
      this.state.password == ""
    ) {
      window.alert("Silakan lengkapi data terlebih dahulu !!!");
      return;
    }
    let cekMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (cekMail.test(this.state.email) == 0) {
      alert("Silakan gunakan email yang valid !!!");
      return;
    }
    var hasil = await axios
      .post(API_URL + "/api/auth/signup", {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        roles: ["USER"]
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });

    console.log(hasil);

    if (hasil.data && hasil.data.signup) {
      alert("Data berhasil disimpan ...");

      this.props.navigation.navigate("LoginScreen");
    } else {
      alert("Gagal simpan ...");
    }
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <View
          style={[
            AppStyles.section,
            {
              padding: Metrics.doubleBaseMargin,
              marginTop: Metrics.section,
              marginBottom: Metrics.doubleSection
            }
          ]}
        >
          <TextInput
            placeholder="Name"
            onChangeText={text =>
              this.setState({
                name: text
              })
            }
          />
          <TextInput
            placeholder="Username"
            onChangeText={text =>
              this.setState({
                username: text
              })
            }
          />
          <TextInput
            placeholder="Email"
            onChangeText={text =>
              this.setState({
                email: text
              })
            }
          />
          <TextInput
            placeholder="Password"
            type="password"
            onChangeText={text =>
              this.setState({
                password: text
              })
            }
          />
        </View>
        <View
          style={{
            marginLeft: Metrics.section,
            marginRight: Metrics.section,
            marginBottom: Metrics.section
          }}
        >
          <RoundedButton
            text="Daftar"
            aktif="1"
            onPress={() => this.registerHandle()}
          />
          <Text style={{ textAlign: "center" }}>
            Sudah Punya Akun?
            <Text
              style={{ paddingLeft: Metrics.baseMargin, color: Colors.ungu }}
              onPress={() => this.props.navigation.navigate("LoginScreen")}
            >
              LOGIN
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
