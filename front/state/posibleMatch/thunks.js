import {createAsyncThunk} from "@reduxjs/toolkit"
import * as SecureStore from "expo-secure-store";
import axios from "axios"

import localHost from "../../localHostIp";

export const getMatchs = createAsyncThunk("MATCHS_REQUEST", (data) => {
  console.log(data)
    return SecureStore.getItemAsync("token").then((token) => {
      console.log("EL TOKEEEEEEN", token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return axios
        .get(`http://${localHost}/api/user/userstype`, data)
        .then((respuesta) => respuesta.data);
    });
  });