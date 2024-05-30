import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailer: null,
    popular: null,
    topRated: null,
    upComing: null,
    trending: null,
    moviesTrending: null
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    getTrailerMovie: (state, action) => {
      state.trailer = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    getUpComingMovies: (state, action) => {
      state.upComing = action.payload;
    },
    getAllTrending: (state, action) => {
      state.trending = action.payload;
    },
    getMoviesTrending: (state, action) => {
      state.moviesTrending = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getTrailerMovie,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
  getAllTrending, 
  getMoviesTrending
} = moviesSlice.actions;

export default moviesSlice.reducer;
