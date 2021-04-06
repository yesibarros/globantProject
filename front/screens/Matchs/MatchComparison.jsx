import * as React from "react";

import { View, ScrollView } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from "../../state/posibleMatch/thunks";
import CardCustom from "../../shared/cardCustom";
import { setMatch } from "../../state/posibleMatch/actions";

// import matches from "./egMatch";

const MatchComparison = () => {
  const dispatch = useDispatch();
  const singleMatch = useSelector((state) => state.matchs.singleMatch);

  const allMatches = useSelector((state) => state.matchs.allMatches);
  const [posibleMatch, setPosibleMatch] = React.useState({});

  const filterAllMatch = [];

  React.useEffect(() => {
    dispatch(getMatchs());
    // .then(() => {

    // });
  }, []);

  React.useEffect(() => {
    // setPosibleMatch(allMatches[0]);
    dispatch(setMatch(allMatches[0]));
  }, [allMatches]);

  if (singleMatch && allMatches) {
    filterAllMatch = allMatches.filter(
      (match) => match._id !== singleMatch._id
    );
  }

  console.log("------++++++777777--------");
  console.log(filterAllMatch);
  console.log("------++++++777777--------");
  const cancelButton = () => {};

  const okButton = () => {};

  return (
    <View>
      {/* <CardCustom matchPerson={posibleMatch} selected="true" /> */}
      {/* 
      <ScrollView horizontal pagingEnabled={true} fadingEdgeLength={20}>
        {allMatches.map((option, i) => {
          return <CardCustom matchPerson={option} key={i} />;
        })}
      </ScrollView> */}
    </View>
  );
};

export default MatchComparison;
