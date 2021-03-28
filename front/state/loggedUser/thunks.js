import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const register= createAsyncThunk("REGISTER_REQUEST", (data)=>{
    return axios.post("/api/auth/register", data).then((respuesta)=>[])
  })


export const login= createAsyncThunk("LOGIN_REQUEST", (data)=>{
  // console.log("entre al login back", data)
  return axios
      .post("http://192.168.0.105:5000/api/auth/login", {email:data.email, password:data.password})
      .then((respuesta) =>  respuesta.data)
})


