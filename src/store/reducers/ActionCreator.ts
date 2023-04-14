import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUsers } from "../users/users.type";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUsers[]>("http://localhost:3200/users");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id: string) => {
    const response = await axios.get<IUsers>(
      `http://localhost:3200/users/${id}`
    );
    return response.data;
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user: IUsers) => {
    const response = await axios.post<IUsers>(
      `http://localhost:3200/users`,
      user
    );
    // console.log(response);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: IUsers) => {
    const { id, ...data } = user;
    const response = await axios.put<IUsers>(
      `http://localhost:3200/users/${id}`,
      data
    );
    return response.data;
  }
);

export const removeUser = createAsyncThunk(
  "user/removeUser",
  async (id: string) => {
    const response = await axios.delete<string>(
      `http://localhost:3200/users/${id}`
    );
    return response.data;
  }
);
