import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Status, item } from "./itemsSlice";

export const fetchWishlsitItems = createAsyncThunk(
  "item/fetchWishlsitItems",
  async () => {
    const { data } = await axios.get(
      `https://b76b48dd1279d78e.mokky.dev/wishlist`
    );

    return data;
  }
);

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItemToWishlist",
  async (newItem: item) => {
    const { data } = await axios.post(
      `https://b76b48dd1279d78e.mokky.dev/wishlist`,
      newItem
    );
    return data;
  }
);

interface wishlistState {
  items: item[];
  totalCount: number;
  status: string;
} 

const initialState: wishlistState = {
  items: [],
  totalCount: 0,
  status: Status.LOADING,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchWishlsitItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })

      .addCase(
        fetchWishlsitItems.fulfilled,
        (state, action: PayloadAction<item[]>) => {
          state.items = action.payload;
          state.totalCount = action.payload.length;
          state.status = Status.SUCCESS;
        }
      )

      .addCase(fetchWishlsitItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
      
  },
});

export const wishlistData = (state: RootState) => state.wishlist;

export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
