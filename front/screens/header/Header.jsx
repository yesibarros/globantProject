import React from 'react';
import {View} from "react-native";
import styles from "./headerStyle"
// const feather = require('feather-icons')
import {IconButton, Badge} from 'react-native-paper';
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux"

const Header = ({navigation}) => {
    const { colors } = useTheme();
    console.log("navigation del header", navigation)
    const menuBadge = useSelector(state => state.menuBadge)
    return (    
        <View style={styles.header} >
            <View style={{position:"absolute", zIndex:2, marginTop:40,marginLeft:17}}>
            { menuBadge && <Badge size={10} style={{position: "absolute", top:35, right: 15, zIndex: 5}}></Badge> }
             <IconButton
                    icon="menu"
                    color={colors.icon}
                    size={35}
                    onPress={() => navigation.openDrawer()}
                  />
            </View>

        </View>
    );
};

export default Header;