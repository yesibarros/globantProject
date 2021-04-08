import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import localHost from "../../localHostIp";

export const getRequests = createAsyncThunk("GET_REQUESTS", () => {

    return SecureStore.getItemAsync("token").then((token) => {

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return axios
        .get(`http://${localHost}/api/user/pendingRequests`)
        .then((respuesta) => respuesta.data);
    });
});

export const acceptRequest = createAsyncThunk("ACCEPT_REQUEST", (data, thunkAPI) => {
    const {loggedUser} = thunkAPI.getState();
    const user = loggedUser.user

    return SecureStore.getItemAsync("token").then((token) => {

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return axios
        .put(`http://${localHost}/api/user/${user._id}/acceptRequest`, {request: [data]})
        .then((respuesta) => {
            
            

            return respuesta.data
        });
    });
});

export const cancelRequest = createAsyncThunk("CANCEL_REQUEST", (data) => {

    return SecureStore.getItemAsync("token").then((token) => {

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return axios
        .put(`http://${localHost}/api/user/${data._id}/cancelRequest`, {request: [data]})
        .then((respuesta) => respuesta.data);
    });
});