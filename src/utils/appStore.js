import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import GPTReducer from "./gptSearchSlice"
import LanguageReducer from "./languagesSlice"

const appStore=configureStore({
    reducer:{
        user: userReducer,
        movies: movieReducer,
        GPTView: GPTReducer,
        language: LanguageReducer,
    }
})

export default appStore;