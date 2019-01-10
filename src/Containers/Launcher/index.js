import React, { Component } from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  HeaderBackButton
} from "react-navigation";

//custom
import IntroPage from "../../Components/Pages/IntroPage";
import RoundedButton from "../../Components/Elements/RoundedButton";

//page
import LoginScreen from "../Login";
import RegisterScreen from "../Register";
import UserScreen from "../User";
import UserEditScreen from "../User/formEdit";

// style
import { Metrics, Colors } from "../../Themes";

class LauncherScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <IntroPage />
        <View
          style={{
            marginLeft: Metrics.section,
            marginRight: Metrics.section,
            marginBottom: Metrics.section
          }}
        >
          <RoundedButton
            text="Akun Baru"
            aktif="1"
            onPress={() => navigate("RegisterScreen")}
          />
          <RoundedButton text="Login" onPress={() => navigate("LoginScreen")} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.abuMuda
  }
};

const AppNavigator = createStackNavigator(
  {
    LauncherScreen: LauncherScreen,
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor={Colors.hijau}
            onPress={() => {
              navigation.popToTop();
              navigation.goBack(null);
            }}
          />
        ),
        headerStyle: {
          backgroundColor: Colors.abuMuda,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor={Colors.hijau}
            onPress={() => {
              navigation.popToTop();
              navigation.goBack(null);
            }}
          />
        ),
        headerStyle: {
          backgroundColor: Colors.abuMuda,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    UserScreen: {
      screen: UserScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor={Colors.hijau}
            onPress={() => {
              //navigation.popToTop();
              navigation.goBack(null);
            }}
          />
        ),
        headerStyle: {
          backgroundColor: Colors.abuMuda,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    UserEditScreen: {
      screen: UserEditScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor={Colors.hijau}
            onPress={() => {
              //navigation.popToTop();
              navigation.goBack(null);
            }}
          />
        ),
        headerStyle: {
          backgroundColor: Colors.abuMuda,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    }
  },
  {
    initialRouteName: "LauncherScreen"
  }
);

export default createAppContainer(AppNavigator);
