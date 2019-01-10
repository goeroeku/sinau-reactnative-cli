import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

//custom
import {
  RoundedButton,
  ButtonCustom,
  ButtonSectionText,
  TextInput,
  TextView
} from "../../Components/Elements";
import HeaderSection from "../../Components/Header/Section";

//style
import { AppStyles, Metrics, Colors, Images, Fonts } from "../../Themes";

// env
import { API_URL } from "react-native-dotenv";

export default class UserScreen extends Component {
  constructor(props) {
    super(props);

    const { params } = props.navigation.state;

    this.state = {
      jwt: params.jwt,
      id: params.user.id,
      user: params.user
    };

    console.log(this.state);
  }

  async handlerLogout() {
    await AsyncStorage.removeItem("jwt");
    this.props.navigation.replace("LoginScreen");
  }

  async onSubmit() {
    var hasil = await axios
      .delete(API_URL + "/api/user/" + this.state.id, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": this.state.jwt
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
    if (hasil.data && hasil.data.remove) {
      alert("Data berhasil dihapus ...");
      this.props.navigation.replace("LauncherScreen");
    } else {
      alert("Gagal hapus ...");
    }
  }

  handlerRemove() {
    Alert.alert(
      "Hapus data",
      "Apakah yakin data akan dihapus?",
      [
        {
          text: "Tidak",
          onPress: () => console.log("Cancel Button"),
          style: "cancel"
        },
        { text: "Iya", onPress: () => this.onSubmit() }
      ],
      { cancelable: false }
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={[AppStyles.container]}>
        <View style={styles.imageContainer}>
          <Image source={Images.logo} style={styles.imageProfile} />
          <Text
            style={[{ marginTop: Metrics.smallMargin }, Fonts.style.normal]}
          >
            {this.state.user.name}
          </Text>
          <Text
            style={[
              {
                marginTop: Metrics.smallMargin,
                marginBottom: Metrics.doubleBaseMargin,
                color: Colors.hijau
              },
              Fonts.style.description
            ]}
          >
            {this.state.user.email}
          </Text>
        </View>
        <HeaderSection label="Akun" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            flexGrow: 2
          }}
        >
          <ButtonSectionText
            label="Edit Akun"
            onPress={() => {
              //this.props.navigation.popToTop();
              navigate("UserEditScreen", {
                jwt: this.state.jwt,
                user: this.state.user
              });
            }}
          />
          <TouchableOpacity
            style={[styles.wraperRemoveButton]}
            onPress={() => this.handlerRemove()}
          >
            <Icon name="md-remove" color={Colors.pink} />
          </TouchableOpacity>
        </View>

        <HeaderSection label="Setting" />
        <ButtonSectionText label="Password" />
        <ButtonSectionText label="PIN" />
        <ButtonSectionText label="Printer" />
        <View
          style={{
            padding: Metrics.baseMargin,
            alignItems: "center",
            backgroundColor: Colors.abu
          }}
        >
          <Text
            style={[
              {
                textAlign: "center",
                marginBottom: Metrics.baseMargin
              },
              Fonts.style.normal
            ]}
          >
            Pengaturan menu selengkapnya ada pada halaman backoffice.
          </Text>
          <Text
            style={{
              paddingLeft: Metrics.baseMargin,
              marginBottom: Metrics.baseMargin,
              color: Colors.hijau
            }}
            onPress={() => navigate("LoginScreen")}
          >
            Login Back Office
          </Text>
        </View>
        <ButtonCustom
          text="Logout"
          aktif="1"
          onPress={() => this.handlerLogout()}
        />
      </ScrollView>
    );
  }
}

const styles = {
  imageContainer: {
    flex: 1,
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
  },
  wraperRemoveButton: {
    padding: Metrics.baseMargin,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.smallMargin,
    borderColor: Colors.abu,
    borderWidth: 0.5,
    borderTopWidth: 0,
    flex: 0.1
  }
};
