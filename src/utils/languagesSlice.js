import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:"languages",
    initialState:{
        language:"English"
    },
    reducers:{
        changeLanguage: (state, action)=>{
            state.language=action.payload
        }
    }
})

export const{changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;