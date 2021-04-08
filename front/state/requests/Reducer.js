import { createReducer } from "@reduxjs/toolkit";

import {
  getRequests,
  cancelRequest,
  acceptRequest,
  createRequest,
} from "./Thunks";

let requests = [];

const requestsReducer = createReducer(requests, {
  [createRequest.fulfilled]: (state, action) => {
    return action.payload;
  },
  [getRequests.fulfilled]: (state, action) => {
    return action.payload;
  },
  [cancelRequest.fulfilled]: (state, action) => {
    return action.payload.pendingRequests;
  },
  [acceptRequest.fulfilled]: (state, action) => {
    return action.payload.pendingRequests;
  },
});

export default requestsReducer;
