import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "../../screens/profile/Profile"
import TabBar from "./TabBar";
import Mentees from "../../screens/Mentees/Mentees"
import Progress from "../../screens/Progress/Progress"
import Matchs from "../../screens/Matchs/Matchs";
import MatchComparison from "../../screens/Matchs/MatchComparison"

const Tab = createBottomTabNavigator();

export default function MyTabs(props) {
  return (
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="Mi perfil" component={Profile} />
        <Tab.Screen name="Matchs" component={Matchs} />
        {/* <Tab.Screen name="Mis mentees" component={Mentees} /> */}
        <Tab.Screen name="Mis mentees" component={MatchComparison} />

      </Tab.Navigator>

  );
}