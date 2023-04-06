import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUsers } from "./users.type";

export const usersApi = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3200" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<IUsers[], number>({
      query: () => ({
        url: "/users",
      }),
      providesTags: (result) => ["User"],
    }),
    createUsers: build.mutation<IUsers, IUsers>({
      query: (post) => ({
        url: `/users`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["User"],
    }),
    updateUsers: build.mutation<IUsers, IUsers>({
      query: (post) => ({
        url: `/users/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation<IUsers, IUsers>({
      query: (post) => ({
        url: `/users/${post.id}`,
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
} = usersApi;
