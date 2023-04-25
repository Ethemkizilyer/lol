import { createSlice } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";
import axios from "axios";

export const getCards=async()=>{
  try {
    const response = await axios(
      "https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json"
    );
    const result= await response.data.data
    return result
  } catch (error) {
    console.log(error)
  }
}


const initialState: ICards[] = [];

export const cardSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    setCards: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCards } = cardSlice.actions;

export default cardSlice.reducer;
