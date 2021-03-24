import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenLoad from './ScreenLoad';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
        drawerStyle={{
          backgroundColor: 'orange',
        }}
      >
        <Drawer.Screen name="Home" component={ScreenLoad} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 

export default App;

