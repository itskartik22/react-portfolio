import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const counterSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.status = !state.status;
    },
  },
});

export const { toggle } = counterSlice.actions;

export default counterSlice.reducer;
