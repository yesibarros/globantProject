import { createReducer } from "@reduxjs/toolkit";

import { getRequests, cancelRequest, acceptRequest } from "./Thunks";

let requests = []

const requestsReducer = createReducer(requests, {
    [getRequests.fulfilled]: (state, action) => {
        return action.payload
    },
    [cancelRequest.fulfilled]: (state, action) => {
        return action.payload.pendingRequests
    },
    [acceptRequest.fulfilled]: (state, action) => {
        return action.payload.pendingRequests
    }

});

export default requestsReducer;
