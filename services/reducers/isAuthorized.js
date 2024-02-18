import { createSlice } from "@reduxjs/toolkit";

const isAuthorizedSlice = createSlice({
  name: "isAuthorized",
  initialState: {
    is: null,
  },

  reducers: {
    isAuthorized: (state, action) => {
      state.is = action.payload;
    },
  },
});
export const isAuthorizedAction = isAuthorizedSlice.actions.isAuthorized;
export default isAuthorizedSlice.reducer;
