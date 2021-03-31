import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getLocations= createAsyncThunk("LOCATIONS_REQUEST", ()=>{
<<<<<<< HEAD
    return axios.get("http://192.168.0.100:5000/api/locations")
=======
    return axios.get("http://192.168.1.3:5000/api/locations")
>>>>>>> 4f002fba8b00e434df9d3b290078eae83ef14d83
    .then((res)=> res.data)
})