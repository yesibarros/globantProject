import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList, Modal, TextInput, Dimensions,KeyboardAvoidingView, TouchableOpacity} from "react-native";
import { Title, IconButton, Card, Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import {state} from "../../utils/state"
import TabBar from "../../routes/Tab/TabBar";
import styles from "./progressStyle";
import CardProgress from "./CardProgress";
import { useDispatch, useSelector } from "react-redux";
import { getObjectives, sendObjective } from "../../state/objetivos/thunks";

export default function Progress({ route, navigation }) {
  const [viewModal, setViewModal] = useState(false);
  const idCurrent = route && route.params && route.params.idCurrent
  const { colors } = useTheme();
  const { height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const logginUser = useSelector((state) => state.loggedUser.user);
  const goals = useSelector((state) => state.objetivos);
  const id = idCurrent || logginUser._id;
  const [objective, setObjective] = useState("")
  const [titleObjective, setTitleObjective] = useState("")

  useEffect(() => {
    // if(logginUser.role && logginUser.role[0] === 'mentor'){
    //   navigation.navigate('Mis mentees')
    // }
  
    dispatch(getObjectives(id));
  }, [id]);

  const handleObjective = () => {
    let obj = {
      objectiveName: titleObjective,
      description: objective,
      mentor: logginUser._id,
      mentee: idCurrent,
    }
    dispatch(sendObjective(obj)).then((data) => 
      dispatch(getObjectives(idCurrent))
    )
  }

  return (
   <View style={{flex:1}}>
     <IconButton
                    icon="menu"
                    color={colors.icon}
                    size={35}
                    style={{position: "absolute"}}
                    onPress={() => navigation.openDrawer()}
                  />
     {console.log("CURRENT ID", idCurrent)}
    <View style={{height: "100%", paddingBottom: 55, maxHeight: height}}>
      <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center'}}>
        <Text style={styles.titleProgress}>Objetivos</Text>
      {logginUser.role && logginUser.role[0] === 'mentor'
      ?
      <IconButton
        size={35}
        color="#009387"
        icon="plus"
        onPress={() => {
          setViewModal(true)
        }}
      />
      :
      null
      }
      </View>

        <Modal visible={viewModal} transparent={true} animationType="slide">
        <View style={styles.viewContainer}>
            <View
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Titulo del objetivo:</Text>
              <TextInput
                style={[styles.input, {color: "#858585", fontSize: 15, backgroundColor: "rgba(255, 255, 255, 0.7)"}]}
                multiline
                value={titleObjective}
                onChangeText={text => setTitleObjective(text)}
              />
              <Text>Descripción del objetivo:</Text>
              <TextInput
                style={[styles.input, {color: "#858585", fontSize: 15, backgroundColor: "rgba(255, 255, 255, 0.7)"}]}
                multiline
                value={objective}
                onChangeText={text => setObjective(text)}
              />
            </View>

            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
            
              <Button
                style={styles.Button}
                onPress={() => {
                  setViewModal(false);
                }}
              >
                <Text
                  style={{ fontSize: 22, color: "white", textAlign: "center" }}
                >
                  Cerrar
                </Text>
              </Button>
                
              <Button
                  style={styles.Button}
                  onPress={() => {
                    setViewModal(false);
                    return handleObjective()
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    ENVIAR
                  </Text>
                </Button>
            </View>
        </View>
        </Modal>
      <View style={{flex: 1,}}>
        {goals?.length > 0 && <FlatList
          data={goals}
          keyExtractor={item => item._id}
          renderItem={(goal) => {
            const last = goal.item._id === goals[goals.length - 1]._id ? true : false;
            return (
                <CardProgress item={goal.item} last={last} />
            )
          }}
        />}
      </View>
    </View>
       <View style={{}}>
        <TabBar state={state} navigation={navigation} />
      </View>
    </View>
   
  );
}
