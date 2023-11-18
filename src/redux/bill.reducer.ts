import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateStatus, getAllBill, getById, getCheckOutBill, getOneBill } from "../api/bill";

const intialState = {
  bill: [],
  isLoading: false,
} as { bill: []; isLoading: boolean };

// THANH TOÁN ĐƠN HÀNG

export const fetchCkeckOutBill = createAsyncThunk(
  "bill/fetchCheckoutStatus",
  async (bill) => {
    const response = await getCheckOutBill(bill);
    return response.data;
  }
);

// TẤT CẢ BILL THEO ID USER
export const fetchUserBill = createAsyncThunk(
  'bill/fetchUserBill',
  async (id: any) => {
     try {
      const response = await getOneBill(id)
      return response.data
     } catch (error) {
      
     }
  }
)

// HIỂN THỊ ĐƠN HÀNG THEO ID
export const fetchBillById = createAsyncThunk("produtcs/fetchBillsOne", async (id: any) => {
  try {
      const response = await getById(id)
      return response.data
  } catch (error) { /* empty */ }
})


// HIỂN THỊ ĐƠN HÀNG 

export const fetchBillAll = createAsyncThunk(
  "bill/fetchBillAll",
  async () => {
    const response = await getAllBill();
    console.log(response.data.bill);
    return response.data.bill;
  }
);

// CẬP NHẬT ĐƠN HÀNG
export const fetchBillUpdate = createAsyncThunk("produtcs/fetchBillUpdate", async (body: any) => {
  try {
      const response = await UpdateStatus(body)
      return response.data
  } catch (error) { /* empty */ }
})

const billSlice = createSlice({
  name: "bill",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCkeckOutBill.fulfilled, (state, action: any) => {
      state.isLoading = false;
    });

    builder.addCase(fetchUserBill.fulfilled, (state, action: any) => {
      state.bill = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchBillAll.fulfilled, (state, action: any) => {
        state.bill = action.payload;
        state.isLoading = false;
    });

    // UPDATE
    builder.addCase(fetchBillUpdate.fulfilled, (state) => {
      state.isLoading = false
  })
  },
});

export const billReducer = billSlice.reducer;

