import * as React from 'react';
import { View } from 'react-native';
import { IconButton, Menu, Divider } from 'react-native-paper';
import {useDispatch} from "react-redux"
import {getSingleUser} from "../../../state/singleUser/thunks"
const MyComponent = (props) => {
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch()
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const selectUser = (id)=>{
    dispatch(getSingleUser({id})).then((data)=> {
      closeMenu()
      props.navigation.navigate("SingleUser")})
  }

  console.log("props.id", props.id)
  return (
    
      <View
        style={{
          justifyContent: 'center',
          alignItems: "center"
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item icon="account-outline" onPress={() => selectUser(props.id)} title="Ver perfil" />
          <Menu.Item icon="rocket-launch-outline" onPress={() => {
            closeMenu()
            props.navigation.navigate('Progress', {idCurrent: props.id})
            }} 
            title="Objetivos" />
          <Menu.Item icon="account-multiple-outline" onPress={() => {}} title="Reunirse" disabled/>
          <Divider />
          <Menu.Item icon="account-cancel-outline" onPress={() => {}} title="Eliminar" />
        </Menu>
      </View>
    
  );
};

export default MyComponent;


