import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Items from "../api/Items";

export const fetchItemsByType = createAsyncThunk(
  'fetch',
  async (type) => {
  const response = await Items.fetchByType(type)
  return response.data;
});

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItemsByType, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default storeSlice.reducer;
