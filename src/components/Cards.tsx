import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "../store";
import { getCards, getFavorite, setCards } from "../features";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { Tooltip } from "@mui/material";
import "../styles/Cards.scss";
import Tilty from "react-tilty";
const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: AppStore) => state?.cards);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    dispatch(getCards());
    dispatch(getFavorite());
  }, []);

  return (
    <div className="cards">
      {cards?.car.map((item: any, i: number) => (
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
              <Buttons id={item.id} />
              <div className="card_card_info">
                <div className="card_card_info_name">{item.id}</div>
                <div className="card_card_info_title">{item.title}</div>
                <div className="card_card_info_tags">
                  {item.tags.map((tag: "string") => {
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
