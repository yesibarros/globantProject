import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export const register = createAsyncThunk("REGISTER_REQUEST", (data) => {
  return axios
    .post("http://192.168.1.6:5000/api/auth/register", data)
    .then((respuesta) => respuesta.data);
});

export const login = createAsyncThunk("LOGIN_REQUEST", (data) => {
  // console.log("entre al login back", data)
  return axios
    .post("http://192.168.1.6:5000/api/auth/login", {
      email: data.email,
      password: data.password,
    })
    .then((respuesta) => respuesta.data);
});

export const updateProfile = createAsyncThunk("UPDATE_REQUEST", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
      .put(`http://192.168.1.6:5000/api/user/${data.id}`, data)
      .then((respuesta) => respuesta.data);
  });
});
