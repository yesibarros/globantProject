// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import { getMatchs } from "./thunks";
import { setMatch } from "./actions";

let match = {
  allMatches: [],
  singleMatch: {},
};

const matchReducer = createReducer(match, {
  [getMatchs.fulfilled]: (state, action) => {
    return { ...state, allMatches: action.payload };
  },
  [setMatch]: (state, action) => {
    return { ...state, singleMatch: action.payload };
  },
});

export default matchReducer;
