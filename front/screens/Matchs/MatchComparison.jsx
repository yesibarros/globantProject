import * as React from "react";

import { View, ScrollView } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from "../../state/posibleMatch/thunks";
import CardCustom from "../../shared/cardCustom";
import { setMatch } from "../../state/posibleMatch/actions";
import { createRequest } from "../../state/requests/Thunks";
import matches from "./egMatch";

const MatchComparison = ({ navigation }) => {
  const dispatch = useDispatch();
  const singleMatch = useSelector((state) => state.matchs.singleMatch);

  const allMatches = useSelector((state) => state.matchs.allMatches);

  const cancelButton = () => {
    return navigation.navigate("SearchMatch");
  };

  const okButton = (selected, currentMatch) => {
    if (selected) {
      dispatch(createRequest(currentMatch));
      // modal y mensaje para editar "quiero que seas me mentee"
      // navigation.navigate("SearchMatch"); // cambiar que vaya a ver tus mentees pendientes.
    } else {
      dispatch(setMatch(currentMatch));
      //  filtrar el all match para que eeste nuevo single match no aparezca de nuevo abajo .
    }
  };

  //user effect para filtar el single match que no aparezca en el all match

  return (
    <View>
      <CardCustom
        matchPerson={singleMatch}
        selected="true"
        cancelButton={cancelButton}
        okButton={okButton}
      />
      {/* poner en el sroll view flechas para los costados */}
      <ScrollView horizontal pagingEnabled={true} fadingEdgeLength={20}>
        {allMatches.map((option, i) => {
          return (
            <CardCustom matchPerson={option} key={i} okButton={okButton} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MatchComparison;
