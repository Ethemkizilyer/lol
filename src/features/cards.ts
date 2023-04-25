import { createSlice } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";


const initialState: ICards[] = [];

export const cardSlice = createSlice({
  name: "people",
  initialState: initialState,
  reducers: {
    setCards: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCards } = cardSlice.actions;

export default cardSlice.reducer;
