import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/profile/Profile";
import TabBar from "./TabBar";
import Mentees from "../../screens/Mentees/Mentees"

import Search from "../../screens/Match/Search"
import Progress from "../../screens/Progress/Progress";
import Tutorial from '../../screens/tutorialApp/Tutorial';
import Photo from '../../screens/Photo/Photo';
// import MatchComparison from "../../screens/Matchs/MatchComparison";

const Tab = createBottomTabNavigator();

export default function MyTabs(props) {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Mi perfil" component={Profile} />
      <Tab.Screen name="Matchs" component={Search} />
      <Tab.Screen name="Mis mentees" component={Mentees} />
      {/* <Tab.Screen name="Photo" component={Photo} /> */}
      <Tab.Screen name="Tutorial" component={Tutorial} />
      {/* <Tab.Screen name="Mis mentees" component={MatchComparison} /> */}
    </Tab.Navigator>
  );
}
