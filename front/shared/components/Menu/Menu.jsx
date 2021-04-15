import * as React from 'react';
import { View, Modal } from 'react-native';
import { IconButton, Menu, Divider } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import { cancelMatch } from '../../../state/loggedUser/thunks'
import ConfirmCancelMatch from './ConfirmCancelMatch'

const MyComponent = ({userId}) => {
  const [visible, setVisible] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const user = useSelector(state => state.loggedUser.user)
  const dispatch = useDispatch()
  const mentor = user.mentor?._id == userId && userId
  const mentee = (user.mentees?.filter(ment => ment._id == userId))[0]
  const handleCancelMatch = (rol)=>{
      setIsLoading(true)
      closeMenu()
      dispatch(cancelMatch({[rol]: userId})).then(()=>{
        setIsLoading(false)
        setShowModal(false)
      })
  }

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
          <Menu.Item icon="rocket-launch-outline" onPress={() => {}} title="Objetivos" />
          <Menu.Item icon="account-multiple-outline" onPress={() => {}} title="Reunirse" disabled/>
          <Divider />
          <Menu.Item icon="account-cancel-outline" onPress={() => setShowModal(true)} title="Cancelar match" />
        </Menu>
        <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(!showModal)}
        >
          <ConfirmCancelMatch cancelMatch={handleCancelMatch} setShowModal={setShowModal} mentee={mentee} mentor={mentor} isLoading={isLoading}/>
        </Modal>
      </View>
    
  );
};

export default MyComponent;


