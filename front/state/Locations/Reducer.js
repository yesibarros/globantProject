import { createReducer } from "@reduxjs/toolkit";
import {getLocations} from './thunks';

const locationsReducer = createReducer([], {
    [getLocations.fulfilled]: (state, action) => action.payload,
});

export default locationsReducer;