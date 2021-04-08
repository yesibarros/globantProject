import * as React from "react";

import { View, ScrollView } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from "../../state/posibleMatch/thunks";
import CardCustom from "../../shared/cardCustom";
import { setMatch } from "../../state/posibleMatch/actions";

// import matches from "./egMatch";

const MatchComparison = ({ navigation }) => {
  const dispatch = useDispatch();
  const singleMatch = useSelector((state) => state.matchs.singleMatch);

  const allMatches = useSelector((state) => state.matchs.allMatches);
  const [posibleMatch, setPosibleMatch] = React.useState({});

  const cancelButton = () => {
    return navigation.navigate("SearchMatch");
  };

  const okButton = () => {};

  return (
    <View>
      <CardCustom
        matchPerson={singleMatch}
        selected="true"
        cancelButton={cancelButton}
        navigation={navigation}
      />
      <ScrollView horizontal pagingEnabled={true} fadingEdgeLength={20}>
        {allMatches.map((option, i) => {
          return <CardCustom matchPerson={option} key={i} navigation={navigation}/>;
        })}
      </ScrollView>
    </View>
  );
};

export default MatchComparison;
