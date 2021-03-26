import { createReducer } from "@reduxjs/toolkit";

import { register, login } from "./thunks";
import { logout, setUser } from "./actions";

const inicialState = { user: {}, token: "" };

const loggedUserReducer = createReducer(inicialState, {
  [register.fulfilled]: (state, action) => action.payload,
  [login.fulfilled]: (state, action) => {state.user = action.payload.user},
  [logout]: (state, action) => inicialState,
  [setUser]: (state, action) => action.payload,
});

export default loggedUserReducer;
