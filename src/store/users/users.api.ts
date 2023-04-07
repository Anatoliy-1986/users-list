import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUsers } from "./users.type";

export const usersApi = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3200" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<IUsers[], void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: (result) => ["User"],
    }),
    getUser: build.query<IUsers, string>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    createUsers: build.mutation<IUsers, IUsers>({
      query: (user) => ({
        url: `/users`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUsers: build.mutation<IUsers, IUsers>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation<IUsers, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUsersMutation,
  useUpdateUsersMutation,
  useDeleteUserMutation,
  useGetUserQuery,
} = usersApi;
