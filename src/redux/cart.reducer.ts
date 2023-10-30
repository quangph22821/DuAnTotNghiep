import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addToCart } from "../api/cart"

const intialState = {
    cart: [],
    isLoading: false
} as { cart:[], isLoading: boolean }

export const fetchAddToCard = createAsyncThunk("cart/fetchAddToCard",async(body:any)=>{
    try {
        const data = await addToCart(body)
        return data.data.products

    } catch (error) {
        
    }
})

const cartSlice = createSlice({
    name:"cart",
    initialState:intialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAddToCard.fulfilled,(state)=>{
            state.isLoading=false
        })
    }
})

export const cartReducer = cartSlice.reducer