import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface item {
  id: number;
  imgUrl: string;
  title: string;
  price: number;
  isFavorite?: boolean;
}

export interface Meta {
  total_items: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

interface paramsFilter {
  currentPage: number;
  limit: number;
}

interface itemsState {
  items: item[];
  pages: Meta | null;
  status: Status;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export const fetchItems = createAsyncThunk<
  { items: item[]; meta: Meta },
  paramsFilter
>("item/fetchItemsStatus", async (params) => {
  const { currentPage, limit } = params;
  const { data } = await axios.get(
    `https://b76b48dd1279d78e.mokky.dev/items?page=${currentPage}&limit=${limit}`
  );

  return data;
});

const initialState: itemsState = {
  items: [],
  pages: null,
  status: Status.LOADING,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<{ items: item[] }>) {
      state.items = action.payload.items;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchItems.pending, (state) => {
        state.status = Status.LOADING;
        state.pages = null;
        state.items = [];
      })

      .addCase(
        fetchItems.fulfilled,
        (state, action: PayloadAction<{ items: item[]; meta: Meta }>) => {
          state.items = action.payload.items.map((item) => ({
            ...item,
            isFavorite: false,
          }));
          state.pages = action.payload.meta;
          state.status = Status.SUCCESS;
        }
      )

      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.pages = null;
        state.items = [];
      });
  },
});

export const ItemsData = (state: RootState) => state.itemsData;
export const selectItems = (state: RootState) => state.itemsData.items;

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
