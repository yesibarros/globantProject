// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import { getNotifications } from "./thunks";
import { newNotification, removeNotification } from "./actions";

let notifications = [];

const notificationsReducer = createReducer(notifications, {
  [getNotifications.fulfilled]: (state, action) => action.payload,
  [newNotification]: (state, action) => [...state, action.payload],
  [removeNotification]: (state, action) =>
    state.filter((s) => s.data.date != action.payload),
});

export default notificationsReducer;
