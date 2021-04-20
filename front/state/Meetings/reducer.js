import { createReducer } from "@reduxjs/toolkit";

import { getMyMeets, createMeets } from "./thunks";
import { getMeets, deleteMeets, updateMeets } from "./actions";

const initialState = [];

const meetingsReducer = createReducer(initialState, {
  [getMyMeets.fulfilled]: (state, action) => (state = action.payload),
  [createMeets.fulfilled]: (state, action) => state
});

export default meetingsReducer;
