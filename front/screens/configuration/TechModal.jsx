//REACT
import * as React from "react";
import {
  ActivityIndicator,
  Modal,
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import PillButton from "../../shared/components/PillButton";
import { updateProfile } from "../../state/loggedUser/thunks";
import { useTheme } from "@react-navigation/native";

import localHost from "../../localHostIp";
const TechModal = ({ visible, setEditTech }) => {
  const { colors } = useTheme();
  const [saveLoad, setSaveLoad] = React.useState(false)
  const [technologiesArray, setTechnologiesArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const user = useSelector((state) => state.loggedUser.user);
  const [selectedTechs, setSelectedTechs] = React.useState(user.technologies);
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get(`http:/${localHost}/api/techs`).then((res) => {
      setTechnologiesArray(res.data);
      setIsLoading(false);
    });
  }, []);

  const handleCloseModal = () => {
    if (!selectedTechs.length) {
      return Alert.alert("¡Cuidado!", "Debes seleccionar alguna tecnología", [
        {
          text: "OK",
          onPress: () =>
            console.log("OK Pressed de Tech seleccionar una tecno"),
        },
      ]);
    }
    setEditTech(false);
  };

  const handleSelect = (id) => {
    const tech = selectedTechs.filter((t) => t._id == id);
    if (tech.length) {
      setSelectedTechs((prevState) => prevState.filter((t) => t._id !== id));
    } else {
      setSelectedTechs((prevState) => [...prevState, { _id: id }]);
    }
  };

  const handleSave = () => {
    setSaveLoad(true)
    const arrayToSave = selectedTechs.map((t) => t._id);
    let obj = {
      id: user._id,
      technologies: arrayToSave,
    };
    dispatch(updateProfile(obj)).then(() => {
      setEditTech(false);
      setSaveLoad(false)
    });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      {isLoading ? (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <Text style={[styles.title, { color: colors.text }]}>
            Tecnologías
          </Text>
          <View style={styles.mapContainer}>
            {technologiesArray.length > 0 &&
              technologiesArray.map((item) => {
                //const selected = selectedTechs.includes(item)
                const selected = selectedTechs.filter(
                  (tech) => tech._id == item._id
                ).length
                  ? true
                  : false;
                return (
                  <PillButton
                    title={item.technologyName}
                    key={item._id}
                    id={item._id}
                    selected={selected}
                    onSelect={handleSelect}
                  />
                );
              })}
          </View>
          <View style={styles.buttonContainer}>
            
              <Button style={styles.button} onPress={handleCloseModal}>
              <Text style={styles.textButton}>Cerrar</Text>
                
              </Button> 
            
            <View style={{ width: wp("40%") }}>
              {saveLoad ? 
              <ActivityIndicator size="large" color="#0000ff" />
              :
              <Button style={styles.button} onPress={() => {
                handleSave()
                handleCloseModal()
                }}>
              <Text style={styles.textButton}>GUARDAR</Text>
                
              </Button>
            }
              
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default TechModal;

const styles = StyleSheet.create({
  viewContainer: {
    height: hp("87%"),
    marginHorizontal: wp("5%"),
    marginVertical: hp("7%"),
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "black",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 5,
  },
  mapContainer: {
    // backgroundColor:"blue",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: wp("1%"),
  },
  title: {
    fontSize: hp("4%"),
    fontWeight: "bold",
  
   letterSpacing: 1,
    marginVertical: hp("3%"),
    marginBottom: hp("2%"),
  },
  buttonContainer: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: hp("4%"),
  },
  button:{
    paddingVertical: hp("0%"),
    width: wp("40%"), 
    backgroundColor: "#e89600"
  },
  textButton:{
    color: "white", 
    fontSize: hp("2%")
  }
});
