import { createSlice } from "@reduxjs/toolkit";

const userMeSlice = createSlice({
  name: "userMe",
  initialState: {
    data: null,
  },

  reducers: {
    userMeReducer: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const userMeAction = userMeSlice.actions.userMeReducer;
export default userMeSlice.reducer;
