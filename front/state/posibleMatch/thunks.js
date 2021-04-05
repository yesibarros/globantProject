import {createAsyncThunk} from "@reduxjs/toolkit"
import * as SecureStore from "expo-secure-store";
import axios from "axios"

import localHost from "../../localHostIp";

export const getMatchs = createAsyncThunk("MATCHS_REQUEST", (data) => {
  
    return SecureStore.getItemAsync("token").then((token) => {

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return axios
        .post(`http://${localHost}/api/user/userstype`, data)
        .then((respuesta) => respuesta.data);
    });
  });