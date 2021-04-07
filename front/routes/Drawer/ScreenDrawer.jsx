import React from "react";
import { View,Text } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import styles from "./drawerStyles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useSelector, useDispatch} from 'react-redux'
import { setTheme } from "../../state/Theme/actions";
import { useTheme } from '@react-navigation/native';
import {logout} from "../../state/loggedUser/actions"




const ScreenDrawer = (props) => {
const user = useSelector(state => state.loggedUser.user)
const { colors } = useTheme();
const dispatch = useDispatch()
const handleLogout=()=>{
  dispatch(logout())

}

const isDarkTheme = useSelector(state => state.darkTheme)
    const toggleTheme =()=>{
        // setIsDarkTheme(!isDarkTheme);
        dispatch(setTheme())
    }


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:"row", marginTop:15}}>
                    <Avatar.Image
                        source={{
                          uri: user.img,
                        }}
                        size={50}
                    />
                <View style={{marginLeft:15, flexDirection:"column"}}>
                    <Title style={styles.title}>
                        {`${user.firstName} ${user.lastName}`}
                    </Title>
                    <Caption style={styles.caption}>{user.email}</Caption>
                </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>{user.mentor? "1":0}</Paragraph>
                        <Caption style={[styles.caption], {marginLeft:10}}>Mentor</Caption>
                    </View>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>{user.mentees.length}</Paragraph>
                        <Caption style={[styles.caption], {marginLeft:10}}>Mentees</Caption>
                    </View>
                </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
          icon={({ color, size }) => (
            <Icon 
            name="home-outline" 
            color={color} 
            size={size} 
            />
          )}
          label="Home"
        onPress={()=>{}}
        />
         <DrawerItem
          icon={({ color, size }) => (
            <Icon 
            name="account-outline" 
            color={color} 
            size={size} 
            />
          )}
          label={`Solicitudes ${(user.receivedPendingRequests == 0) ? "" : user.receivedPendingRequests}`}
        onPress={()=>{props.navigation.navigate('Requests')}}
        />
         <DrawerItem
          icon={({ color, size }) => (
            <Icon 
            name="bookmark-outline" 
            color={color} 
            size={size} 
            />
          )}
          label="Bookmarks"
        onPress={()=>{}}
        />
        {/* <DrawerItem
          icon={({ color, size }) => (
            <Icon 
            name="settings-outline" 
            color={color} 
            size={size} 
            />
          )}
          label="Settings"
        onPress={()=>{}}
        /> */}
        <DrawerItem
          icon={({ color, size }) => (
            <Icon 
            name="account-check-outline" 
            color={color} 
            size={size} 
            />
          )}
          label="Support"
        onPress={()=>{}}
        />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
<TouchableRipple onPress={()=>{toggleTheme()}}>
    <View style={styles.preference}>
        <Text style={{color:colors.text}}>
            Dark Theme
        </Text>
        <View pointerEvents="none">

        <Switch value={isDarkTheme}/>
        </View>
    </View>
</TouchableRipple>
            </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon 
            name="exit-to-app" 
            color={color} 
            size={size} 
            />
          )}
          label="Sign Out"
        onPress={handleLogout}
        />
      </Drawer.Section>
    </View>
  );
};

export default ScreenDrawer;
