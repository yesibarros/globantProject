import Home from "../screens/home/Home"
import React from "react"
import ScreenLoad from "../screens/screenLoad/screenLoad"
import { createStackNavigator } from '@react-navigation/stack';
import Header from "../shared/Header";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Loader"
    >
      <Stack.Screen
        name="Loader"
        component={ScreenLoad}
        options={{header: () => null}}

      />
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{ user: 'me' }}
        options={{header: () => <Header/>}}
      />
    </Stack.Navigator>
  );
}



