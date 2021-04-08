import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import localHost from "../../localHostIp";

export const sendRequest = createAsyncThunk("SEND_REQUEST", (data,thunkAPI) => {
    
    return SecureStore.getItemAsync("token").then((token) => {
        const {loggedUser} = thunkAPI.getState();
        const user = loggedUser.user

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return axios
        .post(`http://${localHost}/api/user/${user._id}/newRequest`, data)
        .then((respuesta) => {
            return respuesta.data
        });
    });
});

export const getRequests = createAsyncThunk("GET_REQUESTS", () => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return axios
      .get(`http://${localHost}/api/user/pendingRequests`)
      .then((respuesta) => respuesta.data);
  });
});

export const acceptRequest = createAsyncThunk(
  "ACCEPT_REQUEST",
  (data, thunkAPI) => {
    const { loggedUser } = thunkAPI.getState();
    const user = loggedUser.user;

    return SecureStore.getItemAsync("token").then((token) => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return axios
        .put(`http://${localHost}/api/user/${user._id}/acceptRequest`, {
          request: [data],
        })
        .then((respuesta) => {

            return respuesta.data
        })
    });
  }
);

export const cancelRequest = createAsyncThunk("CANCEL_REQUEST", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return axios
      .put(`http://${localHost}/api/user/${data._id}/cancelRequest`, {
        request: [data],
      })
      .then((respuesta) => respuesta.data);
  });
});

// export const createRequest = createAsyncThunk("CREATE_REQUEST", (data) => {
//   return SecureStore.getItemAsync("token").then((token) => {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     return axios
//       .post(`http://${localHost}/api/user/${data._id}/newRequest`, {
//         request: [data],
//       })
//       .then((respuesta) => respuesta.data);
//   });
// });

//       :id = userId(_id)
// Enviar en el header el token del usuario
// Los datos enviados en el body crean una nueva solicitud (request) enviada a los usuarios especificados según su id en el body
//
