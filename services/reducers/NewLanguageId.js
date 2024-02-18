import { createSlice } from "@reduxjs/toolkit";

const NewLanguageIdSlice = createSlice({
  name: "NewLanguageId",
  initialState:{
    id:null
  },

  reducers: {
    NewLanguageId: (state, action) => {
      state.id = action.payload.id;
    },
  },
});
export const NewLanguageIdAction = NewLanguageIdSlice.actions.NewLanguageId;
export default NewLanguageIdSlice.reducer;
