import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "../store";
import { addFavorite, getCards, getFavorite, removeFavorite, setCards } from "../features";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import "../styles/Cards.scss";
import Tilty from "react-tilty";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ICards } from "types/cards.types";
const Cards = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: AppStore) => state.cards);
const {cardss} = useSelector((state: any) => state.favorites);
  useEffect(() => {
    getCards().then((data) => dispatch(setCards(Object.values(data))));
    dispatch(getFavorite());
  }, [dispatch]);


   
 

   

   function manageFavorites({id}:{id:string}) {
    const findFav = cardss.find((fav: any) => fav.id === id);
    const filterPerson = cards?.find((p: any) => p.id === id);

console.log(filterPerson);
console.log(findFav);

     findFav
       ? dispatch(removeFavorite(filterPerson))
       : dispatch(addFavorite(filterPerson));
   }

  return (
    <div className="cards">
      {cards?.map((item, i) => (
        <Tilty key={item.id}>
          <li key={item.id} className="card_card">
            <div className="card_card_img">
              <Link to={`/cards/${item.id}`} className="card_card_link">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
                  alt={item.image}
                />
              </Link>
              {/* <Buttons id={item.id} /> */}
              <button onClick={() => manageFavorites({ id: item.id })}>
                {cardss?.filter((c:any) => c.id === item.id).length === 0 ? (
                  <AiOutlineHeart
                    style={{ color: "red" }}
                    className="fav_icon asd"
                  />
                ) : (
                  <AiFillHeart className="fav_icon" style={{ color: "red" }} />
                )}
              </button>
              <div className="card_card_info">
                <div className="card_card_info_name">{item.id}</div>
                <div className="card_card_info_title">{item.title}</div>
                <div className="card_card_info_tags">
                  {item.tags.map((tag) => {
                    return (
                      <Tooltip title={`${tag}`} arrow key={`${tag}`}>
                        <img
                          src={`/tags/${tag}.png`}
                          alt={`${item.id + tag}`}
                          key={`${item.id + tag}`}
                        />
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        </Tilty>
      ))}
    </div>
  );
};

export default Cards;
