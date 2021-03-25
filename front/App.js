import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./shared/Header";
import ScreenLoad from "./screens/screenLoad/screenLoad";
import TabBar from './routes/TabNavigator';
const Drawer = createDrawerNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ScreenLoad"
        drawerStyle={{
          backgroundColor: "orange",
        }}
      >
        <Drawer.Screen name="ScreenLoad" component={ScreenLoad} 
          options={{
            gestureEnabled: false, 
            drawerLabel: () => null,
                  title: null,
            drawerIcon: () => null}}/>
        {/* <Drawer.Screen name="Home" component={Header} /> */}
        <Drawer.Screen name="Profile" component={TabBar} 
          options={{
            drawerLabel: () => null,
                  title: null,
            drawerIcon: () => null}}
        />
      </Drawer.Navigator>
    </NavigationContainer>

  );
};



export default App;
