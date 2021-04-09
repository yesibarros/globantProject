import React from 'react';
import {View} from "react-native";
import styles from "./headerStyle"
// const feather = require('feather-icons')
import {IconButton} from 'react-native-paper';
import { useTheme } from "@react-navigation/native";


const Header = ({navigation}) => {
    const { colors } = useTheme();
    return (    
        <View style={styles.header} >
             <IconButton
                    icon="menu"
                    color={colors.icon}
                    size={35}
                    style={{position:"absolute", zIndex:2, marginTop:40,marginLeft:17}}
                    onPress={() => navigation.openDrawer()}
                  />
        </View>
    );
};

export default Header;