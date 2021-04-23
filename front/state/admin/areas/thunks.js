// REACT REDUX
import { createAsyncThunk } from "@reduxjs/toolkit";

// EXPO
import * as SecureStore from "expo-secure-store";

// AXIOS
import axios from "axios";

// LOCAL HOST
import localHost from "../../../localHostIp";

export const getAreas = createAsyncThunk("GET_AREAS", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .get(`http://${localHost}/api/areas`)
      .then((respuesta) => respuesta.data);
  });
});

export const createArea = createAsyncThunk("CREATE_AREA", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return axios
      .post(`http://${localHost}/api/areas`, { areaName: data })
      .then((respuesta) => respuesta.data);
  });
});

export const deleteArea = createAsyncThunk("DELETE_AREA", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .delete(`http://${localHost}/api/areas/${data._id}`)
      .then((respuesta) => respuesta.data);
  });
});

export const modifyArea = createAsyncThunk("MODIFY_AREA", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .put(`http://${localHost}/api/areas/${data._id}`, { areaName: data.name })
      .then((respuesta) => respuesta.data);
  });
});
