import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../components/shopSlice"

export default configureStore({
  reducer: {
    store: storeReducer,
  },
});
