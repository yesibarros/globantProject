import {createAction} from "@reduxjs/toolkit"

export const setUser= createAction("SET_USER") //Accion para persistencia? 

export const setReceivedPendingRequests = createAction("SET_REQUESTS_NUMBER")

export const logout = createAction("LOGOUT")