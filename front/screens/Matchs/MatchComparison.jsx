import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { View, ScrollView, Alert, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import TabBar from "../../routes/Tab/TabBar";
import { useTheme } from "@react-navigation/native";
import { setMatch } from "../../state/posibleMatch/actions";
import { sendRequest } from "../../state/requests/Thunks";

import ModalMessage from "../../shared/components/modalMessage";
import CardCustom from "../../shared/cardCustom";

const MatchComparison = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const [isLoading, setIsLoeading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filterAllMatches, setFilterAllMatches] = useState([]);

  const loggedUser = useSelector((state) => state.loggedUser.user);
  const singleMatch = useSelector((state) => state.matchs.singleMatch);
  const allMatches = useSelector((state) => state.matchs.allMatches);
  const state = {
    history: [
      {
        key: "Mi perfil-bEYiOS9OrZVRLrjBbgrPC",
        type: "route",
      },
    ],
    index: 0,
    key: "tab-oUvNWB2kZqvz5JELanPW3",
    routeNames: ["Mi perfil", "Matchs", "Mis mentees"],
    routes: [
      {
        key: "Mi perfil-bEYiOS9OrZVRLrjBbgrPC",
        name: "Mi perfil",
        params: undefined,
      },
      {
        key: "Matchs-b4Uw5OPTUHoJLmKAVVhit",
        name: "Matchs",
        params: undefined,
      },
      {
        key: "Mis mentees-cCBXknLflTEPYEk92eQx2",
        name: "Mis mentees",
        params: undefined,
      },
    ],
    stale: false,
    type: "tab",
  };
  useEffect(() => {
    setFilterAllMatches(() =>
      allMatches.filter((match) => match._id !== singleMatch._id)
    );
    setIsLoeading(false);
  }, [singleMatch]);

  const handleSendRequest = (message) => {
    if (loggedUser.role.includes("mentee")) {
      const mentor = {
        _id: singleMatch._id,
        message: message,
      };
      dispatch(sendRequest({ mentor })).then((data) => {
        if (data.meta.requestStatus === "rejected") {
          return Alert.alert(
            "Ya tienes una solicitud en curso",
            "Espera a que sea aceptada o negada para enviar la siguiente",
            [
              {
                text: "Ok",
                onPress: () => navigation.navigate("Requests"),
              },
            ]
          );
        }
        Alert.alert("Solicitud enviada", " ", [
          {
            text: "Ok",
            onPress: () => navigation.navigate("Requests"),
          },
        ]);
      });
    } else {
      const mentees = [
        {
          _id: singleMatch._id,
          message: message,
        },
      ];
      dispatch(sendRequest({ mentees })).then(()=>{
        Alert.alert("Solicitud enviada", " ", [
          {
            text: "Ok",
            onPress: () => navigation.navigate("Requests"),
          },
        ]);
      });
    }
  };

  const cancelButton = () => {
    return navigation.navigate("SearchMatch");
  };

  const okButton = (selected, currentMatch) => {
    if (selected) {
      setShowModal(true);
    } else {
      dispatch(setMatch(currentMatch));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <View style={{ flex: 0.45 }}>
        <CardCustom
          matchPerson={singleMatch}
          selected="true"
          cancelButton={cancelButton}
          okButton={okButton}
        />
      </View>
      <View style={{ flex: 0.45 }}>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
            }}
          >
            <ActivityIndicator size="large" color="orange" />
          </View>
        ) : (
          <View>
            <ScrollView
              horizontal
              pagingEnabled={true}
              fadingEdgeLength={50}
              showsHorizontalScrollIndicator={false}
            >
              {filterAllMatches.map((option, i) => {
                return (
                  <CardCustom
                    matchPerson={option}
                    key={i}
                    okButton={okButton}
                  />
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
      <View style={{ position: "absolute" }}>
        <ModalMessage
          visible={showModal}
          setModalVisible={setShowModal}
          handleSendRequest={handleSendRequest}
        />
      </View>
      <View style={{ flex: 0.08 }}>
        <TabBar state={state} navigation={navigation} />
      </View>
    </View>
  );
};

export default MatchComparison;
