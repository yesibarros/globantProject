import { createAction } from "@reduxjs/toolkit";

export const getMeets = createAction("GET_MEETS");

export const createMeets = createAction("CREATE_MEETS");

export const deleteMeets = createAction("DELETE_MEETS");

export const updateMeets = createAction("UPDATE_MEETS");
