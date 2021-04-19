import * as React from 'react';
import { View, Modal } from 'react-native';
import { IconButton, Menu, Divider } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import { cancelMatch } from '../../../state/loggedUser/thunks'
import ConfirmCancelMatch from './ConfirmCancelMatch'
import {getSingleUser} from "../../../state/singleUser/thunks"
import {createMeets} from '../../../state/Meetings/thunks';
import SendMeeting from './SendMeeting';

const MyComponent = ({userId, navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false)
  const [showModalMeeting, setModalMeeting] = React.useState(false)
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

  const selectUser = (id)=>{
    dispatch(getSingleUser({id})).then((data)=> {
      closeMenu()
      navigation.navigate("SingleUser")})
  }

  const handleSendMeeting = (meeting) => {
      dispatch(createMeets(meeting))
      navigation.navigate("Meeting")
  }

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
          <Menu.Item icon="account-outline" onPress={() => selectUser(userId)} title="Ver perfil" />
          {user?.role?.includes("mentor") && (
            <Menu.Item icon="rocket-launch-outline" onPress={() => {
            closeMenu()  
            navigation.navigate('Progress', {idCurrent: userId})
            }} 
            title="Objetivos" />
          )}
          <Menu.Item icon="account-multiple-outline" onPress={() => {
            setModalMeeting(true)
          }} title="Reunirse" />
          <Divider />
          <Menu.Item icon="account-cancel-outline" onPress={() => setShowModal(true)} title="Cancelar match" />
        </Menu>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModalMeeting}
          animationType="slide"
          onRequestClose={() => setModalMeeting(!showModalMeeting)}
        >
          <SendMeeting handleSendMeeting={handleSendMeeting} setModalMeeting={setModalMeeting} mentee={mentee} mentor={mentor} isLoading={isLoading} closeMenu={closeMenu}/>
        </Modal>
      
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

