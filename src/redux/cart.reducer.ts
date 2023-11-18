import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, getCartUser } from "../api/cart";
import { getAll } from "../api/cart";

const intialState = {
  cart: [],
  isLoading: false,
} as { cart: []; isLoading: boolean };

export const fetchAddToCard = createAsyncThunk(
  "cart/fetchAddToCard",
  async (body: any) => {
    try {
      const data = await addToCart(body);
      return data.data.products;
    } catch (error) {}
  }
);

// Get all Cart
export const fetchCartsAll = createAsyncThunk(
  "carts/fetchCartsAll",
  async () => {
    try {
      const { data } = await getAll();
      return data.carts;
    } catch (error) {
      /* empty */
    }
  }
);

// Get Call User
export const fetchCartUser = createAsyncThunk(
  "cart/fetchCartUser",
  async (_id: string) => {
    try {
      const data = await getCartUser(_id);
      return data.data.cart;
    } catch (error) {}
  }
);

// XÓA CART

// export const fetchCartRemove = createAsyncThunk("produtcs/fetchCartRemove", async (id: any) => {
//   try {
//       const response = await deleteCart(id)
//       return response.data
//   } catch (error) { /* empty */ }
// })

const cartSlice = createSlice({
  name: "cart",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddToCard.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchCartsAll.fulfilled, (state, action) => {
      state.cart = action.payload[0].products;
      state.isLoading = false;
    });

    builder.addCase(fetchCartUser.fulfilled, (state, action) => {
      state.cart = action.payload.products;
      state.isLoading = false;
    });

    //delete
    //  builder.addCase(fetchCartRemove.fulfilled, (state) => {
    //   state.isLoading = false
    // })
  },
});

export const cartReducer = cartSlice.reducer;
