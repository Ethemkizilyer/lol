import React from 'react'
import "../styles/Home.scss";
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home_title">Cards</h1>
      <Cards/>
    </div>
  );
}

export default Home