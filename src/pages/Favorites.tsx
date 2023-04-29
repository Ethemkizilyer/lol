import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStore } from "../store";
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'
import { Tooltip } from "@mui/material";
// import "../styles/Cards.scss";
import Tilty from "react-tilty";
import { getFavorite } from '../features'
const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites=useSelector((state:AppStore)=>state.favorites)
  useEffect(()=>{
dispatch(getFavorite())
  },[])
  console.log(getFavorite());
  return (
    <div className="home">
      <h1 className="home_title">Favorites</h1>
      {favorites.length === 0 ? (
        <div className="no_fav_container">
          <img src="/tags/poro.png" alt="no favorites" />
          <h2>One of them must be your favorite</h2>
          <p>
            Find them in the <Link to="/">home page</Link>
          </p>
        </div>
      ) : (
        <ul className="champs_grid">
          {favorites.map((item) => {
            return (
              <Tilty key={item.id} style={{color:"white"}}>
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
                    <Buttons id={item.id} />
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
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Favorites