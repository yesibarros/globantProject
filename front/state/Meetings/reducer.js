import { createReducer } from "@reduxjs/toolkit";

import { getMyMeets } from "./thunks";
import { getMeets, createMeets, deleteMeets, updateMeets } from "./actions";

const initialState = [];

const meetingsReducer = createReducer(initialState, {
  [getMyMeets.fulfilled]: (state, action) => (state = action.payload),
});

export default meetingsReducer;
