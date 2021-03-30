import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getLocations= createAsyncThunk("LOCATIONS_REQUEST", ()=>{
    return axios.get("http://192.168.0.110:5000/api/locations")
    .then((res)=> res.data)
})