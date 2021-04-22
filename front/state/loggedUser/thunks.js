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

export const googleAuth = createAsyncThunk("GOOGLE_AUTH_REQUEST", (data) => {
  // console.log("entre al login back", data)
  return axios
    .post(`http://${localHost}/api/auth/google`, {
      token: data
    })
    .then((respuesta) => {
      console.log(respuesta.data)
      return respuesta.data
    });
});

export const updateProfile = createAsyncThunk("UPDATE_REQUEST", (data) => {
   return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .put(`http://${localHost}/api/user/${data.id}`, data)
      .then((respuesta) => respuesta.data);
  });
});

export const getProfile = createAsyncThunk("GET_PROFILE", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   return axios
     .get(`http://${localHost}/api/user/`)
     .then((respuesta) => respuesta.data);
 });
});

export const cancelMatch = createAsyncThunk("CANCEL_MATCH", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   return axios
     .post(`http://${localHost}/api/user/cancelMatch`, data)
     .then((respuesta) => respuesta.data);
 });
});
