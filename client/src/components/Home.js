import React from 'react';
import { NavLink } from 'react-router-dom';


import eating from '../img/eating.svg';

const Home = () => (
  <div className="home">
    <div className="home__content">
      <h2 className="home__title">
        <span>Ruby</span> 
        <span>Continental</span>
      </h2>
      <NavLink to="/menu" className="menu__button">View Menu</NavLink>
    </div>
    <img src={eating} alt="Sitting and eating" className="home__image" />
  </div>
);

export default Home;