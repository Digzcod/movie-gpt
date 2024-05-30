import { configureStore } from "@reduxjs/toolkit";
import MovieGptReducers from "./reducers";

const MovieGptStore = configureStore({
    reducer: MovieGptReducers
})
export default MovieGptStore;