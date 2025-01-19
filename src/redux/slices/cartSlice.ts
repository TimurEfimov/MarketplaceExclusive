import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const totalValues = (state: cartState) => {
  state.totalPrice = state.items.reduce(
    (sum, obj) => obj.price * obj.count + sum,
    0
  );
  state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
};

const removeItem = (items: cartItem[], id: number) => {
  return items.filter((obj) => obj.id !== id);
};

interface cartState {
  items: cartItem[];
  totalPrice: number;
  totalCount: number;
}

export interface cartItem {
  imgUrl: string;
  title: string;
  id: number;
  price: number;
  count: number;
}

const initialState: cartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<cartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      totalValues(state);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        if (findItem.count === 1) {
          state.items = removeItem(state.items, action.payload);
        } else {
          findItem.count--;
        }
      }

      totalValues(state);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items = removeItem(state.items, action.payload);

      totalValues(state);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItem, deleteItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
