import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "../store/appStateSlice";

export const store = configureStore({
  reducer: { appStateReducer },
});
