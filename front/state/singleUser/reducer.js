// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import { getSingleUser } from "./thunks";

const singleUser = { user: {} };

const singleUserReducer = createReducer(singleUser, {
  [getSingleUser.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
});

export default singleUserReducer;
