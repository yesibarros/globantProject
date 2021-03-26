import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import loggedUserReducer from "./loggedUser/reducer"
import posibleMatchReducer from "./posibleMatch/reducer";
import objetivosReducer from "./objetivos/reducer"
import mentorsReducer from "./mentors/reducer"
import menteesReducer from "./mentees/reducer"


const store = configureStore({
    //USA MW REACT NATIVE? middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        loggedUser: loggedUserReducer,
        mentees: menteesReducer,
        mentors: mentorsReducer,
        objetivos: objetivosReducer,
        posibleMatch: posibleMatchReducer
    },
});


export default store