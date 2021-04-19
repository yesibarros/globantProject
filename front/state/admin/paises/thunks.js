import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import localHost from "../../../localHostIp"


export const getCountries = createAsyncThunk("GET_COUNTRIES", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .get(`http://${localHost}/api/countries`)
       .then((respuesta) => respuesta.data);
   });
 });

 export const createCountry = createAsyncThunk("CREATE_COUNTRY", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .post(`http://${localHost}/api/countries`, data)
       .then((respuesta) => respuesta.data);
   });
 });

 export const deleteCountry= createAsyncThunk("DELETE_COUNTRY", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     console.log("EL ID", data._id)
     return axios
       .delete(`http://${localHost}/api/countries/${data._id}`)
       .then((respuesta) => respuesta.data);
   });
 });

 export const modifyCountry = createAsyncThunk("MODIFY_COUNTRY", (data) => {
    return SecureStore.getItemAsync("token").then((token) => {
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     return axios
       .put(`http://${localHost}/api/countries/${data._id}`, data)
       .then((respuesta) => respuesta.data);
   });
 });