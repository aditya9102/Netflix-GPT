import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSerachView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSerachView } = GPTSlice.actions;
export default GPTSlice.reducer;
