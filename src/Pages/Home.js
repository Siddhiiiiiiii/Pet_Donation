// Home.js

import React from 'react';
import '../CSS/Home.css';
import petty from '../images/petty.png';
import works from '../images/works.png';
import Statistics from './Statistics';

const Home = () => {
  return (
    <div className="home-container">
      <img
        src= {petty}
        alt="pet donation"
      />

      <div className='working-container'> 
      <img 
      src={works}
      alt="how it works"
      />
      </div>
       
       <Statistics />

      <div className="button-container">
        <button className="pet-button"> Dogs </button>
        <button className="pet-button"> Cats </button>
        <button className="pet-button"> Birds </button>
        <button className="pet-button"> Fish </button>
        <button className="pet-button"> Rabbits </button>
      </div>

    </div>
  );
};

export default Home;
