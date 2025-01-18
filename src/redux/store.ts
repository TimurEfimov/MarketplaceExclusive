import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import itemsData from "./slices/itemsSlice";

export const store = configureStore({
  reducer: {
    itemsData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();