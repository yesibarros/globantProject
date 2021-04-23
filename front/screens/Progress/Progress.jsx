//REACT
import React, { useState, useEffect } from "react";

//REACT-NATIVE
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  ActivityIndicator,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT-NATIVE-PAPER
import { IconButton, Button } from "react-native-paper";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//ROUTES
import TabBar from "../../routes/Tab/TabBar";

//STYLE
import styles from "./progressStyle";

//SCREEN
import CardProgress from "./CardProgress";
import Header from "../header/Header";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { getObjectives, sendObjective } from "../../state/objetivos/thunks";

export default function Progress({ route, navigation }) {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [viewModal, setViewModal] = useState(false);
  const idCurrent = route && route.params && route.params.idCurrent;
  const dispatch = useDispatch();
  const logginUser = useSelector((state) => state.loggedUser.user);
  const goals = useSelector((state) => state.objetivos);
  const id = idCurrent || logginUser?._id;
  const [objective, setObjective] = useState("");
  const [titleObjective, setTitleObjective] = useState("");

  useEffect(() => {
    dispatch(getObjectives(id)).then(() => setIsLoading(false));
  }, [id]);

  const handleObjective = () => {
    let obj = {
      objectiveName: titleObjective,
      description: objective,
      mentor: logginUser?._id,
      mentee: idCurrent,
    };
    dispatch(sendObjective(obj)).then((data) =>
      dispatch(getObjectives(idCurrent))
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#009387" }}>
      <Header navigation={navigation} />

      <View
        style={[
          {
            height: hp("80%"),
            borderTopLeftRadius: 60,
          },
          { backgroundColor: colors.background },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: hp("11%"),
          }}
        >
          <Text style={[styles.titleProgress, { color: colors.text }]}>
            Objetivos
          </Text>
          {/* logginUser.role && logginUser.role[0] === "mentor" */}
          {logginUser.role?.includes("mentor") ? (
            <View
              style={{
                position: "absolute",
                width: wp("95%"),
              }}
            >
              <IconButton
                size={hp("5%")}
                color="#009387"
                icon="plus"
                style={{ alignSelf: "flex-end" }}
                onPress={() => {
                  setViewModal(true);
                }}
              />
            </View>
          ) : null}
        </View>
        {isLoading ? (
          <ActivityIndicator
            style={{ alignItems: "center", height: hp("50%") }}
            size="large"
            color="orange"
          />
        ) : null}

        <Modal visible={viewModal} transparent={true} animationType="slide">
          <View
            style={[
              styles.viewContainer,
              { backgroundColor: colors.background },
            ]}
          >
            <View
              style={{
                height: hp("40%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.modalInstruction, { color: colors.text }]}>
                Titulo del objetivo:
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    color: "#858585",
                    fontSize: hp("3%"),
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  },
                ]}
                multiline
                value={titleObjective}
                onChangeText={(text) => setTitleObjective(text)}
              />
              <Text style={[styles.modalInstruction, { color: colors.text }]}>
                Descripción del objetivo:
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    color: "#858585",
                    fontSize: hp("3%"),
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  },
                ]}
                multiline
                value={objective}
                onChangeText={(text) => setObjective(text)}
              />
            </View>

            <View
              style={{
                height: hp("12%"),
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
                  style={{
                    fontSize: hp("3%"),
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Cerrar
                </Text>
              </Button>

              <Button
                style={styles.Button}
                onPress={() => {
                  setViewModal(false);
                  return handleObjective();
                }}
              >
                <Text
                  style={{
                    fontSize: hp("3%"),
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Enviar
                </Text>
              </Button>
            </View>
          </View>
        </Modal>

        {goals && goals.length > 0 ? (
          <FlatList
            data={goals}
            style={{ height: hp("50%") }}
            keyExtractor={(item) => item._id}
            renderItem={(goal) => {
              const last =
                goal.item?._id === goals[goals.length - 1]?._id ? true : false;
              return <CardProgress item={goal.item} last={last} />;
            }}
          />
        ) : (
          <View style={styles.n}>
            <Text style={styles.nText}>No tienes objetivos establecidos</Text>
          </View>
        )}

        <TabBar navigation={navigation} />
      </View>
    </View>
  );
}
