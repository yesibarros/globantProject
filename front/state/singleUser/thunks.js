// REACT REDUX
import { createAsyncThunk } from "@reduxjs/toolkit";

// AXIOS
import axios from "axios";

// EXPO
import * as SecureStore from "expo-secure-store";

// LOCAL HOST
import localHost from "../../localHostIp";

export const getSingleUser = createAsyncThunk("SINGLE_USER_REQUEST", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .get(`http://${localHost}/api/user/`, {
        params: {
          id: `${data.id}`,
        },
      })
      .then((respuesta) => respuesta.data);
  });
});
