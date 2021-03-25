import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./shared/Header";
import Navigator from "./routes/homeStack"
import MyTabs from "./routes/TabNavigator"
import screenLoad from "./screens/screenLoad/screenLoad"
import { View } from "react-native";

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName="Home"
    //     drawerStyle={{
    //       backgroundColor: "orange",
    //     }}
    //   >
    //     <Drawer.Screen name="Home" component={Header} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer >
      {/* <Navigator/> */}
      <MyTabs/>
    </NavigationContainer>

  );
};



export default App;
