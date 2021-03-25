import {createReducer} from "@reduxjs/toolkit"

import {register, login} from "./thunks"
import {logout, setUser} from "./actions"



const loggedUserReducer= createReducer([], {

    [register.fulfilled] : (state, action) =>  action.payload,    
    [login.fulfilled] : (state, action) =>  action.payload.usuario,
    [logout]: (state, action) => [],
    [setUser]: (state, action) => action.payload,
   
})

  
export default loggedUserReducer