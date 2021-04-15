import {createReducer} from "@reduxjs/toolkit"

import {getSingleUser} from "./thunks"
// import {} from "./actions"

const singleUser= {user: {}}

const singleUserReducer= createReducer(singleUser, {
    [getSingleUser.fulfilled]: (state, action) => {
        state.user = action.payload;
      }
   
})

  
export default singleUserReducer