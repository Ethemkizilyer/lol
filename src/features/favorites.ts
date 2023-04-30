import { createSlice, current } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";
import { LocalStorageTypes } from "../types/localstorage";
import {
  getLocalStorage,
  setLocalStorage,
} from "../helpers/localstorage.utility";

export interface sd {
  cardss: ICards[] | undefined;
 
}

const initialState: sd = {
  cardss: (JSON.parse(localStorage.getItem("favorites")) as ICards[]) || [],
}; 

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getFavorite: (state) => {
      // console.log(JSON.parse(localStorage.getItem("favorites") as any));
      // state= JSON.parse(localStorage.getItem("favorites") as any) || [];
      // console.log(state)
    },
    addFavorite: (state, action) => {
      
      state.cardss = [...state.cardss, action.payload];
      setLocalStorage(LocalStorageTypes.FAVORITES, state.cardss);
    console.log(state);
    
    },
    removeFavorite: (state, action) => {
      const deneme:any = JSON.parse(localStorage.getItem("favorites"));
      console.log(action.payload);
      state.cardss = deneme.filter((p: any) => p.id !== action.payload.id);
      
         setLocalStorage(LocalStorageTypes.FAVORITES, state.cardss);

    },
  },
});

export const {getFavorite, addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
