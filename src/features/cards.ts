import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";
import axios from "axios";
import { LocalStorageTypes } from "../types/localstorage";
import { getLocalStorage, setLocalStorage } from "../helpers/localstorage.utility";


export const getCards=createAsyncThunk(
  "cards/getCards",
  async () => {
  try {
    const response = await axios(
      "https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json"
    );
    const result= await response.data.data
    // setLocalStorage(LocalStorageTypes.PEOPLE, Object.values(result));
    return Object.values(result);
  } catch (error) {
    console.log(error)
  }
})


const initialState: any = {
  car:[]
};

export const cardSlice = createSlice({
  name: "cards",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    setCards: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        // state.loading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        // state.loading = false;
        setLocalStorage(LocalStorageTypes.PEOPLE, action.payload);
        state.car = action.payload;
        // state.error = false;
      })
      .addCase(getCards.rejected, (state) => {
        // state.loading = false;
        // state.error = true;
      });
  },
});

export const { setCards } = cardSlice.actions;

export default cardSlice.reducer;
