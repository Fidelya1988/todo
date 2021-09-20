import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    matching: null,
    matchingArray: [],
  },
  reducers: {
    setMatching(state, action) {
      state.matching =
        typeof action.payload === "string"
          ? action.payload.toLowerCase()
          : action.payload;
    },
    
  },
});
export const { setMatching } = searchSlice.actions;



export default searchSlice.reducer;
