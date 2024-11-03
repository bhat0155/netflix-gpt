import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    currentState: false,
  },
  reducers: {
    toggleGPTView: (state, action) => {
      state.currentState = !state.currentState;
    },
  },
});

export const { toggleGPTView } = gptSearch.actions;
export default gptSearch.reducer;
