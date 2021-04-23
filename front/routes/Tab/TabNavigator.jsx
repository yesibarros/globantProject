//REACT
import React from "react";

//REACT-NAVIGATION
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//SCREENS
import Profile from "../../screens/profile/Profile";
import Mentees from "../../screens/Mentees/Mentees";
import Requests from "../../screens/Requests/Requests";
import Admin from "../../screens/Admin/Admin";

//ROUTES
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

export default function MyTabs(props) {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Mi perfil" component={Profile} />
      <Tab.Screen name="Mis mentees" component={Mentees} />
      <Tab.Screen name="Mi mentor" component={Mentees} />
      <Tab.Screen name="Requests" component={Requests} />
      <Tab.Screen name="Admin" component={Admin} />
    </Tab.Navigator>
  );
}
