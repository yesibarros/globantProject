import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import localHost from "../../../localHostIp"


export const getLocations = createAsyncThunk("GET_LOCATIONS", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .get(`http://${localHost}/api/locations`)
       .then((respuesta) => respuesta.data);
   });
 });

 export const createLocation = createAsyncThunk("CREATE_LOCATION", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .post(`http://${localHost}/api/locations`, data)
       .then((respuesta) => respuesta.data);
   });
 });

 export const deleteLocation= createAsyncThunk("DELETE_LOCATION", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .delete(`http://${localHost}/api/locations/${data._id}`)
       .then((respuesta) => respuesta.data);
   });
 });

 export const modifyLocation = createAsyncThunk("MODIFY_LOCATION", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .put(`http://${localHost}/api/locations/${data._id}`, data)
       .then((respuesta) => respuesta.data);
   });
 });