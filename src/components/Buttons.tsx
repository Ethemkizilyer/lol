import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AppStore } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features";

const Buttons = ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const { cardss } = useSelector((state: AppStore) => state.favorites);
  const cards = useSelector((state: AppStore) => state.cards);

  const findFav = cardss?.find((fav: any) => fav.id === id);
  const filterPerson = cards?.find((p:any) => p.id === id);

  function manageFavorites() {
    console.log("filterPerson");
    findFav
      ? dispatch(removeFavorite(filterPerson))
      : dispatch(addFavorite(filterPerson));
  }
  return (
    <button aria-label="add to favorites" onClick={() => manageFavorites()}>
      {!findFav ? (
        <AiOutlineHeart style={{ color: "red" }} className="fav-icon asd" />
      ) : (
        <AiFillHeart className="fav-icon" style={{ color: "red" }} />
      )}
    </button>
  );
};

export default Buttons;
