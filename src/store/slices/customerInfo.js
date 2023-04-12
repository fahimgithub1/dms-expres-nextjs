import { createSlice } from "@reduxjs/toolkit";


const customerInfo = {
  customer: [],
  token:  null,
};


const CustomerInfoSlices = createSlice({
  name: "PriceFilterProduct",
  initialState: customerInfo,
  reducers: {
    setToken(state, action) {
      return {
        token: action.payload,
      };
    },

    getCustomer(state, action) {
      return {
        customer : action.payload
      };
    },
  },
});

export default CustomerInfoSlices.reducer;
export const { setToken, getCustomer } = CustomerInfoSlices.actions;

