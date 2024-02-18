import { createSlice } from "@reduxjs/toolkit";

const isBoySectionOpen = createSlice({
  name: "isBoySectionOpen",
  initialState: {
    is: false,
  },

  reducers: {
    isBoySectionOpen: (state, action) => {
      state.is = action.payload.is;
    },
  },
});
export const isBoySectionOpenAction = isBoySectionOpen.actions.isBoySectionOpen;
export default isBoySectionOpen.reducer;
