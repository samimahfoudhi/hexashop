import { createSlice } from "@reduxjs/toolkit";

const prodSlice = createSlice({
  name: "product",
  initialState: {
    data: {},
  },
  reducers: {
    setProd: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProd } = prodSlice.actions;

export default prodSlice.reducer;
