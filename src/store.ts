import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ICards } from "../src/types/cards.types";
import { favoritesSlice, cardSlice } from "../src/features";

export interface AppStore {
  cards: ICards[] | any;
  favorites: ICards[] | any;
}

export const store = configureStore<AppStore>({
  reducer: {
    cards: cardSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
