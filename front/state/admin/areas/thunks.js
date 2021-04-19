import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import localHost from "../../../localHostIp"


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
       .post(`http://${localHost}/api/areas`, data)
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
       .put(`http://${localHost}/api/areas/${data._id}`, data)
       .then((respuesta) => respuesta.data);
   });
 });