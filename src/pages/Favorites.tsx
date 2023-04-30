import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStore } from "../store";
// import Buttons from '../components/Buttons'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { Tooltip } from "@mui/material";
import "../styles/Cards.scss";
import Tilty from "react-tilty";
import { addFavorite, getFavorite, removeFavorite } from '../features'
const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {cardss}=useSelector((state:AppStore)=>state.favorites)
  const cards=useSelector((state:AppStore)=>state.cards)
  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);


  function manageFavorites({ id }: { id: string }) {
    const findFav = cardss.find((fav: any) => fav.id === id);
    const filterPerson = cards?.find((p: any) => p.id === id);

    console.log(filterPerson);
    console.log(findFav);

    findFav
      ? dispatch(removeFavorite(findFav))
      : dispatch(addFavorite(filterPerson));
  }
  return (
    <div className="home">
      <h1 className="home_title">Favorites</h1>
      {cardss.length === 0 ? (
        <div className="no_fav_container">
          <img src="/tags/poro.png" alt="no favorites" />
          <h2>One of them must be your favorite</h2>
          <p>
            Find them in the <Link to="/">home page</Link>
          </p>
        </div>
      ) : (
        <ul className="champs_grid">
          {cardss.map((item:any) => {
            return (
              <Tilty key={item.id} style={{ color: "white" }}>
                <li
                  key={item.id}
                  // className={`card_card ${isIntersecting ? "show" : "hidden"}`}
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
                      {cardss?.filter((c: any) => c.id === item.id).length ===
                      0 ? (
                        <AiOutlineHeart
                          style={{
                            color: "red",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            fontSize: "2rem",
                          }}
                          className="fav_icon asd"
                        />
                      ) : (
                        <AiFillHeart
                          className="fav_icon"
                          style={{
                            color: "red",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            fontSize: "2rem",
                          }}
                        />
                      )}
                    </button>
                    <div className="card_card_info">
                      <div className="card_card_info_name">{item.id}</div>
                      <div className="card_card_info_title">{item.title}</div>
                      <div className="card_card_info_tags">
                        {item.tags.map((tag: any) => {
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
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Favorites