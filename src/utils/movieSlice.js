import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        currentTrailer:null,
        popular:null
    },
    reducers:{
        addMovies:(state, action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailer:(state, action)=>{
            state.currentTrailer=action.payload
        },
        addPopular:(state, action)=>{
            state.popular=action.payload
        }

    }
})

export const {addMovies,addTrailer,addPopular} = movieSlice.actions
export default movieSlice.reducer

