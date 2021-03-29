import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";






export const register= createAsyncThunk("REGISTER_REQUEST", (data)=>{
    return axios.post("http://192.168.0.110:5000/api/auth/register", data).then((respuesta)=>respuesta.data)
  })


export const login= createAsyncThunk("LOGIN_REQUEST", (data)=>{
  // console.log("entre al login back", data)
  return axios
      .post("http://192.168.0.110:5000/api/auth/login", {email:data.email, password:data.password})
      .then((respuesta) =>  respuesta.data)
})


