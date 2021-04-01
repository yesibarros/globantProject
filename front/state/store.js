import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import loggedUserReducer from "./loggedUser/reducer"
import posibleMatchReducer from "./posibleMatch/reducer";
import objetivosReducer from "./objetivos/reducer"
import mentorsReducer from "./mentors/reducer"
import menteesReducer from "./mentees/reducer"
import locationsReducer from "./Locations/Reducer"
import ThemeReducer from "./Theme/reducer"


const store = configureStore({
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        loggedUser: loggedUserReducer,
        mentees: menteesReducer,
        mentors: mentorsReducer,
        objetivos: objetivosReducer,
        posibleMatch: posibleMatchReducer,
        locations: locationsReducer,
        darkTheme: ThemeReducer,
    },
});


export default store