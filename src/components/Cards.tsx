import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStore } from '../store'
import { addFavorite, getCards, removeFavorite, setCards } from '../features'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Buttons from './Buttons'
import { Tooltip } from '@mui/material'

const Cards = () => {
    const dispatch=useDispatch<AppDispatch>()
    const cards= useSelector((state:AppStore)=>state.cards)
    const [isIntersecting, setIsIntersecting] = useState(false);


      
    useEffect(() => {
      getCards().then(data=>dispatch(setCards(Object.values(data))))
    }, [])

      
    

  return (
    <div>
      {cards?.map((item, i) => (
        <li
          key={item.id}
          className={`card_card ${isIntersecting ? "show" : "hidden"}`}
        >
          <div>
            <Link to={`/cards/${item.id}`}>
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`} alt={item.image} />
            </Link>
            <Buttons id={item.id}/>
       <div>
        <div>{item.id}</div>
        <div>{item.title}</div>
        <div>
            {item.tags.map(tag=>{
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
      ))}
    </div>
  );
}

export default Cards