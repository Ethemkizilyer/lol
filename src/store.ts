import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ICards } from "../src/types/cards.types";
import { favoritesSlice, cardSlice } from "../src/features";

export interface AppStore {
  champs: ICards[];
  favorites: ICards[];
}

export const store = configureStore<AppStore>({
  reducer: {
    champs: cardSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
