// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import { getUser } from "./thunks";

const mentorsReducer = createReducer([], {
  [getUser]: (state, action) => action.payload,
});

export default mentorsReducer;
