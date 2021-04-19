import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

import axios from "axios";

import localHost from "../../localHostIp";

export const getNotifications = createAsyncThunk("GET_NOTIFICATIONS", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .get(`http://${localHost}/api/notifications`)
      .then((respuesta) => {
        return respuesta.data});
  });
});

