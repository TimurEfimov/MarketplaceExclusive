import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { item, Status } from "./itemsSlice";

export const fetchWishlistItems = createAsyncThunk(
  "item/fetchWishlistItems",
  async () => {
    const { data } = await axios.get(
      `https://b76b48dd1279d78e.mokky.dev/wishlist`
    );
    return data as WishlistItem[];
  }
);

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItemToWishlist",
  async (id: number) => {
    console.log(id);
    const { data } = await axios.post(
      `https://b76b48dd1279d78e.mokky.dev/wishlist`,
      { id }
    );
    console.log(data);
    return data;
  }
);

export const selectWishlistById = (state: RootState) => {
  const itemsData = state.itemsData.items;
  const wishlistId = state.wishlist.items;

  const ids = wishlistId.map((item) => item.id);

  return itemsData
    .filter((item) => ids.includes(item.id))
    .map((item) => ({
      ...item,
      isFavorite: true,
    }));
};

interface WishlistItem {
  id: number;
}

interface wishlistState {
  items: WishlistItem[];
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
      .addCase(fetchWishlistItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchWishlistItems.fulfilled,
        (state, action: PayloadAction<WishlistItem[]>) => {
          state.items = action.payload;
          state.totalCount = action.payload.length;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchWishlistItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
      .addCase(addItemToWishlist.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        addItemToWishlist.fulfilled,
        (state, action: PayloadAction<WishlistItem>) => {
          state.status = Status.SUCCESS;
          state.items.push(action.payload);
          state.totalCount += 1;
        }
      )
      .addCase(addItemToWishlist.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export function markFavorites(products: item[], favoriteIds: number[]) {
  return products.map((product) => {
    const isFavorite = favoriteIds.includes(product.id);
    return {
      ...product,
      isFavorite,
    };
  });
}

export const selectWishlist = (state: RootState) => state.wishlist.items;
export const wishlistData = (state: RootState) => state.wishlist;

export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
