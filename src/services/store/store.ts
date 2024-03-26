import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { userSlice } from "./slices/users";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    users: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
