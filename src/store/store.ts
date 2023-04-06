import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./users/users.api";

export const store = configureStore({
  reducer: { [usersApi.reducerPath]: usersApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
