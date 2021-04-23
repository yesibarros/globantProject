// REACT REDUX
import { createAction } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

export const setReceivedPendingRequests = createAction("SET_REQUESTS_NUMBER");

export const logout = createAction("LOGOUT");
