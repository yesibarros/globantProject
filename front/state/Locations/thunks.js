import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import localHost from "../../localHostIp";

export const getLocations= createAsyncThunk("LOCATIONS_REQUEST", ()=>{
    return axios.get("http://192.168.1.6:5000/api/locations")
    .then((res)=> res.data)
})
