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
    const { data } = await axios.post(
      `https://b76b48dd1279d78e.mokky.dev/wishlist`,
      { id }
    );
    return data;
  }
);

export const deleteItemFromWishlist = createAsyncThunk(
  "wishlist/deleteItemFromWishlist",
  async (id: number) => {
    const idDelete = id;
    await axios.delete(`https://b76b48dd1279d78e.mokky.dev/wishlist/${id}`);
    return idDelete;
  }
);

export const selectWishlistById = (state: RootState) => {
  const itemsData = state.itemsData.items;
  const wishlistItems = state.wishlist.items;

  // Создаем маппинг id -> idDelete для быстрого доступа
  const idToDeleteMap = new Map();
  wishlistItems.forEach((item) => {
    if (item.idDelete) {
      idToDeleteMap.set(item.id, item.idDelete);
    }
  });

  // Фильтруем только элементы, чьи id есть в вишлисте
  return itemsData
    .filter((item) => wishlistItems.some((wishItem) => wishItem.id === item.id))
    .map((item) => ({
      ...item,
      isFavorite: true,
      idDelete: idToDeleteMap.get(item.id) || null, // Добавляем idDelete конкретного элемента
    }));
};

interface WishlistItem {
  id: number;
  idDelete?: number;
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
      })

      .addCase(deleteItemFromWishlist.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        deleteItemFromWishlist.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.status = Status.SUCCESS;
          const idDelete = action.payload;

          console.log("Он должен был удалиться: " + idDelete);

          state.items = state.items.filter((item) => item.id !== idDelete);

          state.totalCount -= 1;
        }
      )

      .addCase(deleteItemFromWishlist.rejected, (state) => {
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
