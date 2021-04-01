import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenLoad from "./screens/screenLoad/screenLoad";
import TabBar from "./routes/TabNavigator";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import Configuration from "./screens/configuration/Configuration";
import PersInfo from "./screens/persInfo/PersInfo";
import store from "./state/store";
import { Provider } from "react-redux";
import EditProfile from './screens/EditProfile/EditProfile';
import Profile from './screens/profile/Profile'
import {useSelector} from 'react-redux'

const Stack = createStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Main = () => {
  const loggedUser = useSelector(state => state.loggedUser.user)

  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="ScreenLoad"
          headerMode={false}
        >
          {loggedUser._id ? (
            <>
              <Stack.Screen name="TabBar" component={TabBar}/>
            </>
          ) : (
            <>
              <Stack.Screen name="ScreenLoad" component={ScreenLoad} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Main;