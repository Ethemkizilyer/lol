import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AppDispatch, AppStore } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features";
import { ICards } from "../types/cards.types";

const Buttons = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((store: AppStore) => store.favorites);
  const cards = useSelector((store: AppStore) => store.cards);

  const findFav = favorites?.find((fav: ICards) => fav.id === id);
  const filterPerson = cards?.find((p: ICards) => p.id === id);

  const manageFavorites=():void=> {
    console.log("object")
    findFav
      ? dispatch(removeFavorite(filterPerson))
      : dispatch(addFavorite(filterPerson));
  }
  return (
    <button aria-label="add to favorites" onClick={() => manageFavorites()}>
      {!findFav ? (
        <AiOutlineHeart style={{ color: "red" }} className="fav-icon " />
      ) : (
        <AiFillHeart className="fav-icon" style={{ color: "red" }} />
      )}
    </button>
  );
};

export default Buttons;
