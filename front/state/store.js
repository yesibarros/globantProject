import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import loggedUserReducer from "./loggedUser/reducer"
import matchReducer from "./posibleMatch/reducer";
import objetivosReducer from "./objetivos/reducer"
import mentorsReducer from "./mentors/reducer"
import menteesReducer from "./mentees/reducer"
import locationsReducer from "./Locations/Reducer"
import ThemeReducer from "./Theme/reducer"
import animationReducer from "./Animation/reducer";
import requestsReducer from './requests/Reducer';

const store = configureStore({
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        loggedUser: loggedUserReducer,
        mentees: menteesReducer,
        mentors: mentorsReducer,
        objetivos: objetivosReducer,
        matchs: matchReducer,
        locations: locationsReducer,
        darkTheme: ThemeReducer,
        animation: animationReducer,
        requests: requestsReducer
    },
});


export default store