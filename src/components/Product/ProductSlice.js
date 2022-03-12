import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    isLoading: false,
  },
  reducers: {
    GET_PRODUCT_REQUESTED: (state) => {
      state.isLoading = true
    },
    GET_PRODUCT_SUCCESS: (state, action) => {
      state.product = action.payload
      state.isLoading = false
    },
    GET_PRODUCT_FAILED: (state) => {
      state.isLoading = false
      console.log("product error!")
    },
  },
})

export const {
  GET_PRODUCT_REQUESTED,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} = productSlice.actions

export default productSlice.reducer
