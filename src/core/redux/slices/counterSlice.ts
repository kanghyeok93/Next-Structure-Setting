import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE Counter state", { ...state });
      console.log("HYDRATE Counter action.payload", action.payload);
      return {
        ...state,
        ...action.payload.counter,
      };
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
