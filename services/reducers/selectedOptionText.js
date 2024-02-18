import { createSlice } from "@reduxjs/toolkit";

const selectedOptionText = createSlice({
  name: "changeSelectedOptionText",
  initialState: {
    text: "",
  },

  reducers: {
    changeSelectedOptionText: (state, action) => {
      state.text = action.payload.text;
    },
  },
});
export const selectedOptionTextAction = selectedOptionText.actions.changeSelectedOptionText;
export default selectedOptionText.reducer;
