import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import localHost from "../../localHostIp";

export const getMyMeets = createAsyncThunk("GET_MEETS", () => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .get(`http://${localHost}/api/meetings`)
      .then((response) => response.data);
  });
});

export const updateMeets = createAsyncThunk("UPDATE_MEETS", (meet) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .put(`http://${localHost}/api/meetings/update/${meet._id}`, meet)
      .then((responde) => response.data);
  });
});

export const deleteMeets = createAsyncThunk("DELETE_MEETS", (meet) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .delete(`http://${localHost}/api/meetings/delete/${meet._id}`)
      .then((response) => response.data);
  });
});

export const createMeet = createAsyncThunk("CREATE_MEETS", (meet) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorizarization"] = `Bearer ${token}`;
    return axios
      .post(`http://${localHost}/api/meetings/create`, meet)
      .then((response) => response.data);
  });
});
