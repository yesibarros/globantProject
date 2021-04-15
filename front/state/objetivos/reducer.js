import { createReducer } from "@reduxjs/toolkit";

import { getObjectives } from "./thunks";
import { getObjective } from "./actions";

let objetives = [];

const objetivosReducer = createReducer(objetives, {
  [getObjectives.fulfilled]: (state, action) => {
    console.log(action)
    return action.payload
  },
});

export default objetivosReducer;
