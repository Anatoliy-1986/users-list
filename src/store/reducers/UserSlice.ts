import { createSlice } from "@reduxjs/toolkit";
import { IUsers } from "../users/users.type";
import {
  createUser,
  fetchUsers,
  getUserById,
  removeUser,
  updateUser,
} from "./ActionCreator";

type Props = {
  users: IUsers[];
  user: IUsers | null;
  isLoading: boolean;
  error: string;
};

const initialState: Props = {
  users: [],
  user: null,
  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        return state;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        return state;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        const error = action.payload;
        state.error = String(error);
        return state;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        return state;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        return state;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        return state;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        const id = action.payload;
        state.users = state.users.filter((user) => user.id !== Number(id));
        return state;
      });
  },
});

export const userReducer = usersSlice.reducer;
