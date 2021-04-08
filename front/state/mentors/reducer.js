import {createReducer} from "@reduxjs/toolkit"

import {getUser} from "./thunks"
import {} from "./actions"



const mentorsReducer= createReducer([], {
[getUser]: (state, action) => action.payload
})

  
export default mentorsReducer