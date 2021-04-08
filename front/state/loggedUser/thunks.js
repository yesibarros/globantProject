import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import localHost from "../../localHostIp";

export const register = createAsyncThunk("REGISTER_REQUEST", (data) => {
  
  return axios
    .post(`http://${localHost}/api/auth/register`, data)
    .then((respuesta) => respuesta.data);
});

export const login = createAsyncThunk("LOGIN_REQUEST", (data) => {
  // console.log("entre al login back", data)
  return axios
    .post(`http://${localHost}/api/auth/login`, {
      email: data.email,
      password: data.password,
    })
    .then((respuesta) => respuesta.data);
});

export const updateProfile = createAsyncThunk("UPDATE_REQUEST", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .put(`http://${localHost}/api/user/${data.id}`, data)
      .then((respuesta) => respuesta.data);
  });
});
