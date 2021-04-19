import * as React from 'react';
import { List } from 'react-native-paper';
import {View, Modal} from "react-native"
import {useSelector} from "react-redux"
import TabBar from "../../routes/Tab/TabBar"
import styles from "./adminStyle"
import AltaModal from "./Alta/Alta"
import ModificacionModal from "./Modificacion/Modificacion"
import BorrarModal from "./Baja/Baja"

const MyComponent = ({navigation}) => {
  const [expanded, setExpanded] = React.useState(true);
  const loginUser= useSelector(state => state.loggedUser.user)
  const handlePress = () => setExpanded(!expanded);
  const [name, setName] = React.useState("")
  const [viewModal, setViewModal] = React.useState(false)
  const [viewModModal, setViewModModal] = React.useState(false)
  const [viewDelModal, setViewDelModal] = React.useState(false)

  return (
    <View style={{flex:1}}>
    <List.Section title="Panel de administración">
      <List.Accordion
        title="Areas"
        onPress={()=> setName("area")}
        left={props => <List.Icon {...props} icon="laptop" />}>
        
        <List.Item title="Alta" onPress={()=> setViewModal(true)}/>
        <List.Item title="Modificación" onPress={()=> setViewModModal(true)}/>
        <List.Item title="Baja" onPress={()=> setViewDelModal(true)}/>
      </List.Accordion>

      <List.Accordion
        title="Tecnologías"
        onPress={()=> setName("tecnologia")}
        left={props => <List.Icon {...props} icon="wrench-outline" />}>
        <List.Item title="Alta" onPress={()=> setViewModal(true)}/>
        <List.Item title="Modificación" onPress={()=> setViewModModal(true)} />
        <List.Item title="Baja" onPress={()=> setViewDelModal(true)}/>
      </List.Accordion>

      <List.Accordion
        title="Países"
        onPress={()=> setName("país")}
        left={props => <List.Icon {...props} icon="flag-variant-outline" />}>
        <List.Item title="Alta" onPress={()=> setViewModal(true)}/>
        <List.Item title="Modificación" onPress={()=> setViewModModal(true)}/>
        <List.Item title="Baja" onPress={()=> setViewDelModal(true)} />
      </List.Accordion>

      <List.Accordion
        title="Locaciones"
        onPress={()=> setName("locación")}
        left={props => <List.Icon {...props} icon="map-marker" />}>
        <List.Item title="Alta" />
        <List.Item title="Modificación" onPress={()=> setViewModModal(true)}/>
        <List.Item title="Baja" onPress={()=> setViewDelModal(true)} />
      </List.Accordion>
      
    </List.Section>
    {viewModal ? <AltaModal viewModal={viewModal} nombre={name} setViewModal={setViewModal}/> : null}
    {viewModModal ? <ModificacionModal viewModModal={viewModModal} nombre={name} setViewModModal={setViewModModal}/> : null}
    {viewDelModal ? <BorrarModal viewDelModal={viewDelModal} nombre={name} setViewDelModal={setViewDelModal}/> : null}
    <TabBar navigation={navigation} />
    </View>
  );
};

export default MyComponent;