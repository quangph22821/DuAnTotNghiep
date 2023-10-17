import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./redux/products.reducer";
import { originReducer } from "./redux/origin.reducer";
import { materialReducer } from "./redux/material.reducer";
import { categoryReducer } from "./redux/categories.reducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    origin: originReducer,
    material: materialReducer,
    categories: categoryReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
