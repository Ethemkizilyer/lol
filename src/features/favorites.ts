import { createSlice, current } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";
import { LocalStorageTypes } from "../types/localstorage";
import {
  getLocalStorage,
  setLocalStorage,
} from "../helpers/localstorage.utility";

const initialState: ICards[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    getFavorite: (state) => {
      const newState = 
      (getLocalStorage(LocalStorageTypes.FAVORITES));
      const yu:ICards[] = JSON.parse(localStorage.getItem("favorites") as any);
        console.log(yu);
      return yu;
    },
    addFavorite: (state, action) => {
      const newState = [...current(state), action.payload];
      setLocalStorage(LocalStorageTypes.FAVORITES, newState);
    
      return newState;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: ICards) => p.id !== action.payload.id
      );
         setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    },
  },
});

export const {getFavorite, addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
