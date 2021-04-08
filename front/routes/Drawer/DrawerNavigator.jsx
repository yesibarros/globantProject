import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


import TabBarNavigator from"../Tab/TabNavigator"
import ScreenDrawer from "./ScreenDrawer"
import Requests from "../../screens/Requests/Requests"
import Mentees from '../../screens/Mentees/Mentees';


const Drawer = createDrawerNavigator()

export default function MyTabs() {
  return (
    <Drawer.Navigator drawerContent={props=><ScreenDrawer {...props}/>}>
    <Drawer.Screen name="TabBarNavigator" component={TabBarNavigator}/>
    <Drawer.Screen name="Requests" component={Requests}/>
    <Drawer.Screen name="Mentor" component={Mentees}/>
    </Drawer.Navigator>

  );
}