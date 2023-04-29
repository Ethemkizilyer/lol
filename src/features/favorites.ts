import { createSlice, current } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";
import { LocalStorageTypes } from "../types/localstorage";
import {
  getLocalStorage,
  setLocalStorage,
} from "../helpers/localstorage.utility";

const initialState: any = {
  car: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getFavorite: (state) => {
      const newState = JSON.parse(localStorage.getItem("favorites") as "any");
      state.car = newState;
    },
    addFavorite: (state, action) => {
      const newState = [...current(state.car), action.payload];
      setLocalStorage(LocalStorageTypes.FAVORITES, newState);
      state.car = newState;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state.car).filter(
        (p: ICards) => p.id !== action.payload.id
      );
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
      state.car = filteredState;
    },
  },
});

export const { getFavorite, addFavorite, removeFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
