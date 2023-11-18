import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./redux/products.reducer";
import { originReducer } from "./redux/origin.reducer";
import { materialReducer } from "./redux/material.reducer";
import { categoryReducer } from "./redux/categories.reducer";
import { userReducer } from "./redux/user.reducer";
import { cartReducer } from "./redux/cart.reducer";
<<<<<<< HEAD
import { billReducer } from "./redux/bill.reducer";
=======
>>>>>>> 6908a60216319fdfdb5067261c813993bb8469c5

export const store = configureStore({
  reducer: {
    products: productReducer,
    origin: originReducer,
    material: materialReducer,
    categories: categoryReducer,
    users: userReducer,
<<<<<<< HEAD
    carts: cartReducer,
    bills: billReducer,
=======
    cart:cartReducer
>>>>>>> 6908a60216319fdfdb5067261c813993bb8469c5
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;