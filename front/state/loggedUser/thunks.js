import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export const register = createAsyncThunk("REGISTER_REQUEST", (data) => {
  return axios
<<<<<<< HEAD
    .post("http://192.168.0.100:5000/api/auth/register", data)
=======
    .post("http://192.168.1.3:5000/api/auth/register", data)
>>>>>>> 4f002fba8b00e434df9d3b290078eae83ef14d83
    .then((respuesta) => respuesta.data);
});

export const login = createAsyncThunk("LOGIN_REQUEST", (data) => {
  // console.log("entre al login back", data)
  return axios
<<<<<<< HEAD
    .post("http://192.168.0.100:5000/api/auth/login", {
=======
    .post("http://192.168.1.3:5000/api/auth/login", {
>>>>>>> 4f002fba8b00e434df9d3b290078eae83ef14d83
      email: data.email,
      password: data.password,
    })
    .then((respuesta) => respuesta.data);
});

export const updateProfile = createAsyncThunk("UPDATE_REQUEST", (data) => {
  return SecureStore.getItemAsync("token").then((token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios
<<<<<<< HEAD
      .put(`http://192.168.0.100:5000/api/user/${data.id}`, data)
=======
      .put(`http://192.168.1.3:5000/api/user/${data.id}`, data)
>>>>>>> 4f002fba8b00e434df9d3b290078eae83ef14d83
      .then((respuesta) => respuesta.data);
  });
});
