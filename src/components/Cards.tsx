import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "../store";
import { addFavorite, getCards, getFavorite, removeFavorite, setCards } from "../features";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { Tooltip } from "@mui/material";
import "../styles/Cards.scss";
import Tilty from "react-tilty";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const Cards = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: AppStore) => state.cards);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    getCards().then((data) => dispatch(setCards(Object.values(data))));
    dispatch(getFavorite());
  }, []);


   
   const favorites = useSelector((store: AppStore) => store.favorites);
  console.log(favorites);

   

   function manageFavorites({id}:{id:string}) {
    const findFav = favorites?.find((fav: any) => fav.id === id);
    const filterPerson = cards?.find((p: any) => p.id === id);


     findFav
       ? dispatch(removeFavorite(filterPerson))
       : dispatch(addFavorite(filterPerson));
   }

  return (
    <div className="cards">
      {cards?.map((item, i) => (
        <Tilty key={item.id}>
          <li
            key={item.id}
            className={`card_card ${isIntersecting ? "show" : "hidden"}`}
          >
            <div className="card_card_img">
              <Link to={`/cards/${item.id}`} className="card_card_link">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
                  alt={item.image}
                />
              </Link>
              {/* <Buttons id={item.id} /> */}
              <button onClick={() => manageFavorites({ id: item.id })}>
                {favorites?.filter((c) => c.id === item.id).length == 0 ? (
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
