import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    currentState: false,
    geminiResults:null,
    tmdbResults:null,
  },
  reducers: {
    toggleGPTView: (state, action) => {
      state.currentState = !state.currentState;
    },
    addMovies:(state, action)=>{
      const{gemini, tmdb}=action.payload
      state.geminiResults=gemini;
      state.tmdbResults=tmdb;
    }
  },
});

export const { toggleGPTView,addMovies } = gptSearch.actions;
export default gptSearch.reducer;
