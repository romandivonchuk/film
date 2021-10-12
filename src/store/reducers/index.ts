import { combineReducers } from "redux";
import { filmsReducer } from "./filmReducer";

export const rootReducer = combineReducers({films: filmsReducer})

export type RootState = ReturnType<typeof rootReducer>