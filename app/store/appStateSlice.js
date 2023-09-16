import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    authAction: (state, action) => {
      state.auth = action.payload;
    },
    sessionAction: (state, action) => {
      state.session = action.payload;
    },
    logOutAction: () => {
      state = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { authAction, sessionAction, logOutAction } =
  appStateSlice.actions;

export default appStateSlice.reducer;
