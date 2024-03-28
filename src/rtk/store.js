import { configureStore } from "@reduxjs/toolkit";
import score from "./score";
const store = configureStore({
  reducer: {
    score,
  },
});
export default store;
