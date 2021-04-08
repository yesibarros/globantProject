import React from 'react';
import {View} from "react-native";
import styles from "./headerStyle"
// const feather = require('feather-icons')
import {IconButton} from 'react-native-paper';
import {primaryGreen} from "../../utils/Colors"

const Header = ({navigation}) => {

    return (    
        <View style={styles.header} >
            <IconButton
                  icon="menu"
                  color="white"
                  size={30}
                  style={{position:"absolute", zIndex:2}}
                  onPress={() => navigation.openDrawer()}
                />
        </View>
    );
};

export default Header;