import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/profile/Profile";
import TabBar from "./TabBar";
import Mentees from "../../screens/Mentees/Mentees";
import Mentor from "../../screens/Mentor/Mentor"
import {useSelector} from "react-redux"
import Search from "../../screens/Match/Search";
import Progress from "../../screens/Progress/Progress";

import MatchComparison from "../../screens/Matchs/MatchComparison";

const Tab = createBottomTabNavigator();


export default function MyTabs(props) {
  const loggedUser= useSelector(state => state.loggedUser.user)
  const showMentees = loggedUser && loggedUser.role && loggedUser.role[0] == "mentor" ? true: false
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Mi perfil" component={Profile} />
       {/* <Tab.Screen name="Matchs" component={Search} />  */}
      <Tab.Screen name="Progress" component={Progress} />
      {showMentees ? 
        <Tab.Screen name="Mis mentees" component={Mentees} />
        :
        <Tab.Screen name="Mi mentor" component={Mentor} />
      }
      
    </Tab.Navigator>
  );
}
