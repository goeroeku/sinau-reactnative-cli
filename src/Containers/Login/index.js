import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import axios from "axios";

//custom
import RoundedButton from "../../Components/Elements/RoundedButton";
import TextInput from "../../Components/Elements/TextInputCustom";

//style
import { AppStyles, Metrics, Fonts } from "../../Themes";

// env
import { API_URL } from "react-native-dotenv";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }
  async saveItem(key, value) {
    await AsyncStorage.setItem(key, value);
  }
  async onSubmit() {
    if (this.state.email == "" || this.state.password == "") {
      window.alert("Silakan isi email dan password dahulu !!!");
      return;
    }
    var res = await axios
      .post(API_URL + "/api/auth/signin", {
        username: this.state.email,
        password: this.state.password
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    if (res.data && res.data.auth) {
      this.saveItem("jwt", res.data.accessToken);
      var user = await this.getUser(res.data.accessToken);
      console.log(user);
      this.props.navigation.replace("UserScreen", {
        jwt: res.data.accessToken,
        //user: user.data.user
        user: {
          id: user.data.user.id,
          name: user.data.user.name,
          username: user.data.user.username,
          email: user.data.user.email
        }
      });
    } else {
      window.alert("Gagal login ...");
    }
  }

  async getUser(jwt) {
    var hasil = await axios
      .get(API_URL + "/api/user/" + this.state.email, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": jwt
        }
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });

    return hasil;
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <Text
          style={[
            Fonts.style.h1,
            { marginTop: Metrics.doubleSection, textAlign: "center" }
          ]}
        >
          LOGIN
        </Text>
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
            placeholder="Username"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            placeholder="Password"
            value={this.state.password}
            type="password"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: Metrics.section,
            marginRight: Metrics.section,
            marginBottom: Metrics.section
          }}
        >
          <RoundedButton
            text="Login"
            aktif="1"
            onPress={() => this.onSubmit()}
          />
          <RoundedButton
            text="Lupa Password"
            onPress={() => alert("On progres ...")}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
