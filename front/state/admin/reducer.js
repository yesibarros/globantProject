// REACT REDUX
import { createReducer } from "@reduxjs/toolkit";
import { createArea, deleteArea, getAreas, modifyArea } from "./areas/thunks";
import {
  createTech,
  deleteTech,
  getTechs,
  modifyTech,
} from "./tecnologias/thunks";
import {
  createCountry,
  deleteCountry,
  getCountries,
  modifyCountry,
} from "./paises/thunks";
import {
  createLocation,
  deleteLocation,
  getLocations,
  modifyLocation,
} from "./locaciones/thunks";

const initialState = {
  areas: [],
  tecnologias: [],
  paises: [],
  locaciones: [],
};

const adminReducer = createReducer(initialState, {
  //AREAS
  [getAreas.fulfilled]: (state, action) => {
    state.areas = action.payload;
  },
  [createArea.fulfilled]: (state, action) => {
    state.areas = action.payload;
  },
  [deleteArea.fulfilled]: (state, action) => {
    state.areas = [...state];
  },
  [modifyArea.fulfilled]: (state, action) => {
    state.areas = state.areas;
  },
  //TECNOLOGIAS
  [getTechs.fulfilled]: (state, action) => {
    state.tecnologias = action.payload;
  },
  [createTech.fulfilled]: (state, action) => {
    state.tecnologias = action.payload;
  },
  [deleteTech.fulfilled]: (state, action) => {
    state.tecnologias = [...state];
  },
  [modifyTech.fulfilled]: (state, action) => {
    state.tecnologias = state.tecnologias;
  },
  //PAISES
  [getCountries.fulfilled]: (state, action) => {
    state.paises = action.payload;
  },
  [createCountry.fulfilled]: (state, action) => {
    state.paises = action.payload;
  },
  [deleteCountry.fulfilled]: (state, action) => {
    state.paises = [...state];
  },
  [modifyCountry.fulfilled]: (state, action) => {
    state.paises = state.paises;
  },
  //LOCACIONES
  [getLocations.fulfilled]: (state, action) => {
    state.locaciones = action.payload;
  },
  [createLocation.fulfilled]: (state, action) => {
    state.locaciones = action.payload;
  },
  [deleteLocation.fulfilled]: (state, action) => {
    state.locaciones = [...state];
  },
  [modifyLocation.fulfilled]: (state, action) => {
    state.locaciones = state.locaciones;
  },
});

export default adminReducer;
