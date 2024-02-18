import { createSlice } from "@reduxjs/toolkit";

const changeTitleSlice = createSlice({
  name: "changeTitle",
  initialState: {
    name: "MES COURS",
  },

  reducers: {
    changeTitleName: (state, action) => {
      state.name = action.payload.name;
    },
  },
});
export const changeTitleNameAction = changeTitleSlice.actions.changeTitleName;
export default changeTitleSlice.reducer;
