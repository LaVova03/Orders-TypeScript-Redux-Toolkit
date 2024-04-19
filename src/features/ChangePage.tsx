import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  isPage: boolean;
  isOrders: any[];
  isTime: string;
  isDate: string;
}

const initialState: CounterState = {
  isPage: false,
  isOrders: [],
  isTime: "",
  isDate: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPage: (state) => {
      state.isPage = !state.isPage;
    },
    setTime: (state, action) => {
      state.isTime = action.payload;
    },
    setDate: (state, action) => {
      state.isDate = action.payload;
    },
    setOrders: (state, action) => {
      state.isOrders = action.payload;
    },
  },
});

export const { setPage, setOrders, setTime, setDate } = counterSlice.actions;

export default counterSlice.reducer;
