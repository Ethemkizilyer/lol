import { createSlice } from "@reduxjs/toolkit";

import { ICards } from "../types/cards.types";
import axios from "axios";
import { LocalStorageTypes } from "../types/localstorage";
import { getLocalStorage, setLocalStorage } from "../helpers/localstorage.utility";
export const getCards=async()=>{
  try {
    const response = await axios(
      "https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json"
    );
    const result= await response.data.data
    // console.log(Object.values(result));
    setLocalStorage(LocalStorageTypes.PEOPLE, Object.values(result));
    return result
  } catch (error) {
    console.log(error)
  }
}


const initialState: ICards[] = [];

export const cardSlice = createSlice({
  name: "cards",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE))
    : initialState,
  reducers: {
    setCards: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { setCards } = cardSlice.actions;

export default cardSlice.reducer;
