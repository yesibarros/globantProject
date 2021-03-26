import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/home/Home"
import Profile from "../screens/profile/Profile"
import ScreenLoad from "../screens/screenLoad/screenLoad"
import TabBar from "./TabBar";
import Mentees from "../screens/Mentees/Mentees"
import Progress from "../screens/Progress/Progress"
// import SignInScreen from "../screens/SignIn/SignIn"
// import SignUpScreen from "../screens/SignUp/SignUp"

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
       <Tab.Screen name="Mi perfil" component={Profile} />
      <Tab.Screen name="Mi progreso" component={Progress} />
      <Tab.Screen name="Mis mentees" component={Mentees} />
    </Tab.Navigator>
  );
}