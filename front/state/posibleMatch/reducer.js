import { createReducer } from "@reduxjs/toolkit";

import { getMatchs } from "./thunks";
import {} from "./actions";

const matchReducer = createReducer([], {
  [getMatchs]: (state, action) => action.payload,
});

export default matchReducer;
