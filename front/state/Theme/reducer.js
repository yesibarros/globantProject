import {createReducer} from "@reduxjs/toolkit"
import {setTheme} from "./actions"


let isDarkTheme = false; 

const ThemeReducer= createReducer(isDarkTheme, {
    [setTheme] : (state,action)=> !state
   
})

  
export default ThemeReducer