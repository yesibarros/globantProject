// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import {
  register,
  login,
  updateProfile,
  cancelMatch,
  getProfile,
  googleAuth,
  finishMentoring,
} from "./thunks";
import { logout, setUser, setReceivedPendingRequests } from "./actions";

// EXPO
import * as SecureStore from "expo-secure-store";

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
  [googleAuth.fulfilled]: (state, action) => {
    SecureStore.setItemAsync("token", action.payload.token).then(() => {});
    state.user = action.payload.user;
  },
  [updateProfile.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [getProfile.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [cancelMatch.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [finishMentoring.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [logout]: (state, action) => inicialState,
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
  [setReceivedPendingRequests]: (state, action) => {
    state.user.receivedPendingRequests = action.payload;
  },
});

export default loggedUserReducer;
