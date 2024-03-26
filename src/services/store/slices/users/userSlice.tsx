import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface InitialState {
  users: User[];
  isLoading: boolean;
}

const initialState: InitialState = {
  users: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoadingUsers(state) {
      state.isLoading = true;
    },

    setUsers(state, payload) {},
  },
});

export const { startLoadingUsers, setUsers } = userSlice.actions;
