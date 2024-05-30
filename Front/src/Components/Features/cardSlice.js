import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cardData",
  initialState: {
    data: {},
  },
  reducers: {
    setProdCard: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProdCard } = cardSlice.actions;

export default cardSlice.reducer;
