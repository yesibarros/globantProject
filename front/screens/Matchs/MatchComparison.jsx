import React, { useState, useEffect } from "react";

import { View, ScrollView, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
// import { getMatchs } from "../../state/posibleMatch/thunks";
import CardCustom from "../../shared/cardCustom";
import { setMatch } from "../../state/posibleMatch/actions";
import { sendRequest } from "../../state/requests/Thunks";
// import matches from "./egMatch";
import ModalMessage from "../../shared/components/modalMessage";

const MatchComparison = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const singleMatch = useSelector((state) => state.matchs.singleMatch);
  const loggedUser = useSelector((state) => state.loggedUser.user);

  const allMatches = useSelector((state) => state.matchs.allMatches);
  const [filterAllMatches, setFilterAllMatches] = useState([]);
  useEffect(() => {
    setFilterAllMatches(() =>
      allMatches.filter((match) => match._id !== singleMatch._id)
    );
  }, []);

  // const filterAllMatches = allMatches.filter(match => match._id !== singleMatch._id)
  // console.log("===============================");
  // console.log("===============================");
  // console.log("===============================");

  // console.log(filterAllMatches);
  // console.log("===============================");
  // console.log("===============================");
  // console.log("===============================");

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

      dispatch(sendRequest({ mentees }));
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
      //  filtrar el all match para que eeste nuevo single match no aparezca de nuevo abajo .
    }
  };

  //user effect para filtar el single match que no aparezca en el all match

  return (
    <View>
      <ModalMessage
        visible={showModal}
        setModalVisible={setShowModal}
        handleSendRequest={handleSendRequest}
      />

      <CardCustom
        matchPerson={singleMatch}
        selected="true"
        cancelButton={cancelButton}
        okButton={okButton}
      />
      {/* poner en el sroll view flechas para los costados */}
      <ScrollView horizontal pagingEnabled={true} fadingEdgeLength={20}>
        {filterAllMatches.map((option, i) => {
          return (
            <CardCustom matchPerson={option} key={i} okButton={okButton} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MatchComparison;
