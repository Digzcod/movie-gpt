import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGE } from "../../utils/helper";

const configSlice = createSlice({
  name: "multi-language",
  initialState: {
    language: "en",
    selectedLanguage: SUPPORTED_LANGUAGE[0],
    showLanguage: false,
    gptMovieResults: [],
  },
  reducers: {
    setLanguageChange: (state, action) => {
      state.language = action.payload;
    },
    setLanguage: (state, action) => {
      state.selectedLanguage = SUPPORTED_LANGUAGE.find(
        (lang) => lang.identifier === action.payload
      );
      state.showLanguage = false;
    },
    langToogleShow: (state) => {
      state.showLanguage = !state.showLanguage;
    },
    getGptMovieSuggestions: (state, action) => {
      state.gptMovieResults = action.payload
    }
  },
});

export const {
  languageChange,
  setLanguageChange,
  setLanguage,
  langToogleShow,
  getGptMovieSuggestions,
} = configSlice.actions;
export default configSlice.reducer;
