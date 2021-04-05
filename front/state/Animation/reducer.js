import {createReducer} from "@reduxjs/toolkit"
import {setAnimation} from "./actions"


let animation = true; 

const animationReducer= createReducer(animation, {
    [setAnimation] : (state,action)=> !state
   
})

  
export default animationReducer