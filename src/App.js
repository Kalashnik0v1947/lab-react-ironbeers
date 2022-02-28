// REACT ROUTES AXIOS CSS
import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
//import axios for API usage
//step 2 import route and routes from react
//step 3 import all the created routes make sure to import react on each page
//step 4 export each function from each component

// ROUTE FUNCTIONS
import Beers from './components/Beers';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import OneBeer from './components/OneBeer';




function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/beers' element={<Beers />} />
      <Route path='/new-beer' element={<NewBeer />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/beers/:id' element={<OneBeer />} />
    </Routes>
      
    </div>
  );
}

export default App;
