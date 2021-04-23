// REACT REDUX
import { createAsyncThunk } from "@reduxjs/toolkit";

// EXPO
import * as SecureStore from "expo-secure-store";

// AXIOS
import axios from "axios";

// LOCALHOST
import localHost from "../../../localHostIp";

export const getTechs = createAsyncThunk("GET_TECHS", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .get(`http://${localHost}/api/techs`)
      .then((respuesta) => respuesta.data);
  });
});

export const createTech = createAsyncThunk("CREATE_TECH", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .post(`http://${localHost}/api/techs`, { technologyName: data })
      .then((respuesta) => respuesta.data);
  });
});

export const deleteTech = createAsyncThunk("DELETE_TECH", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .delete(`http://${localHost}/api/techs/${data._id}`)
      .then((respuesta) => respuesta.data);
  });
});

export const modifyTech = createAsyncThunk("MODIFY_TECH", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .put(`http://${localHost}/api/techs/${data._id}`, {
        technologyName: data.name,
      })
      .then((respuesta) => respuesta.data);
  });
});
