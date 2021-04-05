import {createReducer} from "@reduxjs/toolkit"

import {getMatchs} from "./thunks"
import { setMatch } from "./actions"

let match= []

const matchReducer= createReducer(match, {
    [getMatchs.fulfilled]: (state, action) => {
        state= action.payload
    },
   [setMatch]: (state, action) => action.payload
})

  
export default matchReducer