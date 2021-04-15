import * as React from 'react';
import { View } from 'react-native';
import { IconButton, Menu, Divider } from 'react-native-paper';

const MyComponent = (props) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

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
          <Menu.Item icon="account-outline" onPress={() => {}} title="Ver perfil" />
          <Menu.Item icon="rocket-launch-outline" onPress={() => navigate.navigate('Progress', {idCurrent: props.id})} title="Objetivos" />
          <Menu.Item icon="account-multiple-outline" onPress={() => {}} title="Reunirse" disabled/>
          <Divider />
          <Menu.Item icon="account-cancel-outline" onPress={() => {}} title="Eliminar" />
        </Menu>
      </View>
    
  );
};

export default MyComponent;


