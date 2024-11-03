import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        currentTrailer:null,
        popular:null,
        topRated:null,
        upComing:null
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
        },
        addTopRated:(state, action)=>{
            state.topRated=action.payload
        },
        addUpcomming:(state,action)=>{
            state.upComing=action.payload;
        }

    }
})

export const {addMovies,addTrailer,addPopular, addTopRated,addUpcomming} = movieSlice.actions
export default movieSlice.reducer

