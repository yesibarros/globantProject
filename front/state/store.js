import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import loggedUserReducer from "./loggedUser/reducer"
import matchReducer from "./posibleMatch/reducer";
import objetivosReducer from "./objetivos/reducer"
import mentorsReducer from "./mentors/reducer"
import menteesReducer from "./mentees/reducer"
import locationsReducer from "./Locations/Reducer"
import themeReducer from "./Theme/reducer"
import animationReducer from "./Animation/reducer";
import requestsReducer from './requests/Reducer';
import toggleRoleReducer from "./ToggleRole/reducer"
import menuBadgeReducer from './menuBadge/menuBadge'

const store = configureStore({
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        loggedUser: loggedUserReducer,
        mentees: menteesReducer,
        mentors: mentorsReducer,
        objetivos: objetivosReducer,
        matchs: matchReducer,
        locations: locationsReducer,
        darkTheme: themeReducer,
        animation: animationReducer,
        requests: requestsReducer,
        toggleRole:toggleRoleReducer, 
        menuBadge: menuBadgeReducer
    },
});


export default store