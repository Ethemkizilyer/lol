import { createSlice, current } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";


const initialState: ICards[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newState = [...current(state), action.payload];
      return newState;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: ICards) => p.id !== action.payload.id
      );
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
