import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import itemsData from "./slices/itemsSlice";
import cart from "./slices/cartSlice";
import wishlist from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    itemsData,
    cart,
    wishlist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
