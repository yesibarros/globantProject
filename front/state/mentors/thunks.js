import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getUser = createAsyncThunk("GET_USER", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return axios
        .get(`http://${localHost}/api/user?id=${data._id}`)
        .then((respuesta) => respuesta.data);
    });
  });