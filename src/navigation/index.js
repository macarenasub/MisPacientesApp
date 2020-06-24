import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { theme } from "../constants";
import Login from "../screens/Login";
import Register from "../screens/Register";

const screens = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0, // for android
      },
      headerBackImage: (
        <Image source={require("../../assets/icons/back.png")} />
      ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base,
      },
    },
  }
);

export default createAppContainer(screens);
