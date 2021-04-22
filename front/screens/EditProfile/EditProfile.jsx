import React, { useState, useEffect } from "react";
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Avatar,
  Card,
  Button,
  Chip,
  Title,
  Icon,
  TextInput,
} from "react-native-paper";
import styles from "./EditProfileStyles";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../state/loggedUser/thunks";
import SelectPicker from "react-native-form-select-picker";
import { useTheme } from "@react-navigation/native";
import Colors from "../../utils/Colors";

const EditProfile = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [enableShift, setEnabledShift] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const loginUser = useSelector((state) => state.loggedUser.user);
  const initEditMode = loginUser.location ? false : true;
  const [editMode, setEditMode] = useState(initEditMode);
  const [selected, setSelected] = useState();
  const [firstName, setFirstName] = useState(loginUser.firstName);
  const [lastName, setLastName] = useState(loginUser.lastName);
  const [description, setDescription] = React.useState(loginUser.description);
  const locations = useSelector((state) => state.locations);
  console.log(locations);
  const handleFirstNameChange = (val) => {
    setFirstName(val);
  };
  const handleLastNameChange = (val) => {
    setLastName(val);
  };
  const handleDescriptionChange = (val) => {
    setDescription(val);
  };

  const meets = useSelector((state) => state.meetings);

  useEffect(() => {
    if (loginUser.technologies.length > 0 && !loginUser.location) {
      Alert.alert("¡Genial!", "Ahora solo falta que indiques tu sede", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }, []);

  const editProfile = () => {
    setEditMode(true);
  };

  const saveProfile = () => {
    setEditMode(false);
    let obj = {
      id: loginUser._id,
      firstName: firstName,
      lastName: lastName,
      location: selected,
      description: description,
    };
    dispatch(updateProfile(obj)).then(() => {
      setEditMode(false);
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: "2.5%",
        }}
      >
        <View>
          <Card.Title
            left={() => (
              <Avatar.Icon
                backgroundColor="#009387"
                color="#ffc78f"
                rounded
                icon="account"
                size={50}
                style={{ marginBottom: 5 }}
              />
            )}
            title={`${loginUser.firstName} ${loginUser.lastName} `}
            subtitle="Nombre"
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
          />
          <Card.Title
            left={() => (
              <Avatar.Icon
                backgroundColor="#009387"
                color="#ffc78f"
                rounded
                icon="map-marker"
                size={50}
                style={{ marginBottom: 5 }}
              />
            )}
            title={loginUser.location?.locationName ? loginUser.location?.locationName: "Sin sede"}
            subtitle="Sede"
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
          />
          <Card.Title
            left={() => (
              <Avatar.Icon
                backgroundColor="#009387"
                color="#ffc78f"
                rounded
                icon="card-text-outline"
                size={50}
                style={{ marginBottom: 5 }}
              />
            )}
            title={loginUser.description ? loginUser.description : "Sin descripción"}
            subtitle="Acerca de mi"
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
          />
        </View>

        <Button
          style={styles.buttonSize}
          mode="contained"
          onPress={editProfile}
        >
          <Text style={{ fontSize: 20, justifyContent: "center" }}>Editar</Text>
        </Button>
      </View>

 
        <Modal visible={editMode} animationType="slide" transparent={true}>
          {isLoading ? (
            <View style={{ backgroundColor: colors.background }}>
              <ActivityIndicator
                style={{ flex: 1, alignItems: "Center" }}
                size="large"
                color="#0000ff"
              />
            </View>
          ) : (
            <ScrollView>
              <View
                style={[
                  styles.viewContainer,
                  {
                    backgroundColor: colors.background,
                    borderRadius: 50,
                    borderWidth: 1.5,
                    borderColor: Colors.primaryGreen,
                    shadowColor: Colors.primaryGreen,
                  },
                ]}
              >
                <Title style={styles.titleDates}>
                  Edita tus datos personales:
                </Title>

                <View style={[styles.cardContainer, { marginTop: 0 }]}>
                  {/* icon="account"  */}
                  {/* icon="card-text-outline"  */}
                  {/* icon="map-marker" */}

                  <TextInput
                    style={styles.textInput}
                    label="Nombre"
                    placeholder="Nombre"
                    value={firstName}
                    onChangeText={(val) => handleFirstNameChange(val)}
                    onFocus={() => setEnabledShift(true)}
                  />

                  <TextInput
                    style={styles.textInput}
                    label="Apellido"
                    placeholder="Apellido"
                    value={lastName}
                    onChangeText={(val) => handleLastNameChange(val)}
                    onFocus={() => setEnabledShift(true)}
                  />

                  <TextInput
                    style={styles.textInput}
                    label="SobreMi"
                    placeholder="Acerca de mi"
                    value={description}
                    onChangeText={(val) => handleDescriptionChange(val)}
                    onFocus={() => setEnabledShift(true)}
                  />

                  <View style={styles.action}>
                    {editMode ? (
                      <SelectPicker
                        onValueChange={(value) => {
                          setSelected(value);
                        }}
                        selected={selected}
                        style={styles.inputLocation}
                        placeholder="Elegí tu sede"
                      >
                        {locations.length > 0 &&
                          locations.map((val) => {
                            return (
                              <SelectPicker.Item
                                label={`${val.locationName} (${val?.country?.countryName})`}
                                value={val._id}
                                key={val._id}
                              />
                            );
                          })}
                      </SelectPicker>
                    ) : loginUser.location ? (
                      <Text>{loginUser.location.locationName}</Text>
                    ) : null}
                  </View>
                </View>

                <Button
                  style={styles.buttonSize}
                  mode="contained"
                  onPress={saveProfile}
                >
                  <Text style={{ fontSize: 20, justifyContent: "center" }}>
                    Guardar
                  </Text>
                </Button>
              </View>
              <KeyboardSpacer/>
            </ScrollView>
          )}
        </Modal>

    </View>
  );
};

export default EditProfile;
