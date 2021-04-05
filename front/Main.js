import React from "react";
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from 'react-native-paper'
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as  NavigationDefaultTheme  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./routes/Drawer/DrawerNavigator"
import ScreenLoad from "./screens/screenLoad/screenLoad";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import {useSelector} from 'react-redux'
import 'react-native-gesture-handler'
const Stack = createStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Main = () => {
  const showAnimation=useSelector(state=> state.animation)
  const loggedUser = useSelector(state => state.loggedUser.user)
  const isDarkTheme = useSelector(state => state.darkTheme)
  
 const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
         <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
       
        <Stack.Navigator
          initialRouteName="ScreenLoad"
          headerMode={false}
        >

          {loggedUser._id ? (
            <>
          
              <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
             
             
            </>
          ) : (
            
            <>
            {showAnimation ? 
            <>
              <Stack.Screen name="ScreenLoad" component={ScreenLoad} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              </>
              :
              <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              </>

          }
            
            </>
          )}
        </Stack.Navigator>
        
      </NavigationContainer>
        </PaperProvider>
  );
};

export default Main;