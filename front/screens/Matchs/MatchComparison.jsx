//REACT
import React, { useState, useEffect } from "react";

//REACT-NATIVE
import {
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT-NATIVE-PAPER
import { Avatar } from "react-native-paper";

//ROUTES
import TabBar from "../../routes/Tab/TabBar";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { setMatch } from "../../state/posibleMatch/actions";
import { sendRequest } from "../../state/requests/Thunks";

//SHARED
import ModalMessage from "../../shared/components/modalMessage";
import CardCustom from "../../shared/cardCustom";

const MatchComparison = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoeading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filterAllMatches, setFilterAllMatches] = useState([]);

  const loggedUser = useSelector((state) => state.loggedUser.user);

  const singleMatch = useSelector((state) => state.matchs.singleMatch);
  const allMatches = useSelector((state) => state.matchs.allMatches);

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
      dispatch(sendRequest({ mentees })).then(() => {
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
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <CardCustom
          matchPerson={singleMatch}
          selected="true"
          cancelButton={cancelButton}
          okButton={okButton}
        />
      </View>
      <View>
        {isLoading ? (
          <View
            style={{
              height: hp("45%"),
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
                  <CardCustom matchPerson={option} key={i} okButton={okButton}>
                    <Avatar.Icon
                      size={24}
                      icon="arrow-right-thin-circle-outline"
                      style={{ position: "absolute" }}
                    />
                  </CardCustom>
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
      <TabBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default MatchComparison;
