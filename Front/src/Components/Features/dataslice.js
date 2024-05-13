import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchByIdStatus",
  () => {
    return axios
      .get("http://localhost:7000/getAllProducts")
      .then((response) => response.data);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    pending: false,
    data: [],
    error: "",
  },
  reducers: {
    setproducts: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { setproducts } = productsSlice.actions;

export default productsSlice.reducer;
