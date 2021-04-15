import React from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/profile/Profile";
import TabBar from "./TabBar";
import Mentees from "../../screens/Mentees/Mentees";

import Progress from "../../screens/Progress/Progress";

const Tab = createBottomTabNavigator();

export default function MyTabs(props) {
  const loggedUser = useSelector((state) => state.loggedUser.user);
  const userType = loggedUser.role == "mentor" ? "Mis Mentees" : "Mi Mentor"
  return (
    <Tab.Navigator tabBar={(props) => <TabBar{...props} />}>
      <Tab.Screen name="Mi perfil" component={Profile} />
      <Tab.Screen name="Progress" component={Progress} />
     
      <Tab.Screen name={userType} component={Mentees} />
    </Tab.Navigator>
  );
}
