import { createReducer } from "@reduxjs/toolkit";

import { getObjectives } from "./thunks";
import { getObjective } from "./actions";

let objetives = [];

const objetivosReducer = createReducer(objetives, {
  [getObjectives.fulfilled]: (state, action) => action.payload,
});

export default objetivosReducer;
