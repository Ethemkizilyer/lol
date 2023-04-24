import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
