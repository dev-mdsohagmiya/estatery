import { createSlice } from "@reduxjs/toolkit";

const bottomTabShown = createSlice({
  name: "bottomTabShown",
  initialState: {
    is: true,
  },

  reducers: {
    isbottomTabShown: (state, action) => {
      state.name = action.payload.is;
    },
  },
});
export const bottomTabShownAction = bottomTabShown.actions.isbottomTabShown;
export default bottomTabShown.reducer;
