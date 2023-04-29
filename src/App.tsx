import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/favorites' element={<Favorites/>}/>
<Route path='/cards/:id' element={<CardDetails/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
