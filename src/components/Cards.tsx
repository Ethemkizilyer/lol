import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStore } from '../store'
import { addFavorite, getCards, removeFavorite, setCards } from '../features'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Buttons from './Buttons'

const Cards = () => {
    const dispatch=useDispatch<AppDispatch>()
    const cards= useSelector((state:AppStore)=>state.cards)
    const favorites = useSelector((store: AppStore) => store.favorites);
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
              <img src={item.image} alt={item.image} />
            </Link>
            <Buttons id={item.id}/>
       
          </div>
        </li>
      ))}
    </div>
  );
}

export default Cards