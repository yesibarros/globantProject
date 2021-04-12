import {createReducer} from "@reduxjs/toolkit"
import {setToggleRole} from "./actions"


let isMentor = false; 

const toggleRoleReducer= createReducer(isMentor, {
    [setToggleRole] : (state,action)=> !state
   
})

  
export default toggleRoleReducer