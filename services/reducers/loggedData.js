import { createSlice } from "@reduxjs/toolkit";

const loggedDataSlice = createSlice({
  name: "loggedData",
  initialState:{
    data:null
  },

  reducers: {
    loggedData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const loggedDataAction = loggedDataSlice.actions.loggedData;
export default loggedDataSlice.reducer;
