// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import {
  getRequests,
  cancelRequest,
  acceptRequest,
  sendRequest,
} from "./Thunks";
import { setRequests } from "./Actions";

let requests = [];

const requestsReducer = createReducer(requests, {
  [getRequests.fulfilled]: (state, action) => {
    return action.payload;
  },
  [cancelRequest.fulfilled]: (state, action) => {
    return action.payload.pendingRequests;
  },
  [acceptRequest.fulfilled]: (state, action) => {
    return action.payload.pendingRequests;
  },
  [sendRequest.fulfilled]: (state, action) => {
    return action.payload;
  },
  [setRequests]: (state, action) => action.payload,
});

export default requestsReducer;
