import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./routes/Drawer/DrawerNavigator"
import ScreenLoad from "./screens/screenLoad/screenLoad";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import {useSelector} from 'react-redux'
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

const Main = () => {
  const loggedUser = useSelector(state => state.loggedUser.user)

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ScreenLoad"
          headerMode={false}
        >

          {loggedUser._id ? (
            <>
           
              <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
             
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