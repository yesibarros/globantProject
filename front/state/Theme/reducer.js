// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import { setTheme } from "./actions";

let isDarkTheme = false;

const themeReducer = createReducer(isDarkTheme, {
  [setTheme]: (state, action) => !state,
});

export default themeReducer;
