import {combineReducers} from "@reduxjs/toolkit"
import userSlice from "./features/userSlice";
import moviesSlice from "./features/moviesSlice";
import searchSlice from "./features/gptSearchSlice";
import configSlice, { languageChange } from "./features/configSlice";

const MovieGptReducers = combineReducers({
    user: userSlice,
    movies: moviesSlice,
    gpt: searchSlice,
    multi_language: configSlice 
})

export default MovieGptReducers ;