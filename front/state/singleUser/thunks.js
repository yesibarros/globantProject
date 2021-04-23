import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import * as SecureStore from "expo-secure-store";

import localHost from "../../localHostIp";

export const getSingleUser = createAsyncThunk("SINGLE_USER_REQUEST", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .get(`http://${localHost}/api/user/`, {
        params: {
          id: `${data.id}`
        }})
       .then((respuesta) => respuesta.data);
   });
 });