import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


import TabBarNavigator from"../Tab/TabNavigator"
import ScreenDrawer from "./ScreenDrawer"



const Drawer = createDrawerNavigator()

export default function MyTabs() {
  return (
    <Drawer.Navigator drawerContent={props=><ScreenDrawer {...props}/>}>
    <Drawer.Screen name="TabBarNavigator" component={TabBarNavigator}/>
    </Drawer.Navigator>

  );
}