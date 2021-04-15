import { createReducer } from "@reduxjs/toolkit";

import { getObjectives, sendObjective, updateObjective } from "./thunks";
import { getObjective } from "./actions";

let objetives = [];

const objetivosReducer = createReducer(objetives, {
  [getObjectives.fulfilled]: (state, action) => {
      return action.payload
  },
  [sendObjective.fulfilled]: (state, action) => {
    return action.payload
  },
  [updateObjective.fulfilled]: (state, action) => {
    return action.payload
  },
});

export default objetivosReducer;
