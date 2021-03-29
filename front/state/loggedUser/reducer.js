import { createReducer } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

import { register, login, updateProfile } from "./thunks";
import { logout, setUser } from "./actions";

const inicialState = { user: {}, token: "" };

const loggedUserReducer = createReducer(inicialState, {
  [register.fulfilled]: (state, action) => {
    SecureStore.setItemAsync("token", action.payload.token).then(() => {});
    state.user = action.payload.user;
  },

  [login.fulfilled]: (state, action) => {
    SecureStore.setItemAsync("token", action.payload.token).then(() => {});
    state.user = action.payload.user;
  },

  [updateProfile.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [logout]: (state, action) => inicialState,
  [setUser]: (state, action) => action.payload,
});

export default loggedUserReducer;
