import React from 'react';
import { NavLink } from 'react-router-dom';


import eating from '../img/eating.svg';


const Thanks = () => {
  return (
    <div className="empty">
      <h1 className="thanks__heading">Ruby Continental</h1>
      <h2 className="page__heading">Thank you</h2>
      <div className="content">
        <img src={eating} alt="Payment card" className="empty__image" />
        <p className="empty__message">Enjoy your meal</p>
      </div>
    </div>
  );
}

export default Thanks;