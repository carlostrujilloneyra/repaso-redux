import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

// Ten presente que state es igual que "initialState" puedes usar otro nombre si quieres.

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },

    decrement(state) {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
