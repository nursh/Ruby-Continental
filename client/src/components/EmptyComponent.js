import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import sprite from '../img/image-sprite.svg';
import card from '../img/card.svg';

const EmptyComponent = ({ heading, src, message, img }) => (
  <div className="empty">
    <h2 className="page__heading">{heading}</h2>
    <div className="content">
      {
        (!img) 
          ? (<svg className="empty__image">
              <use xlinkHref={`${sprite}#${src}`} />
            </svg>)
          : <img src={card} alt="Payment card" className="empty__image" />
      }

      <p className="empty__message">{message}</p>
      <NavLink to="/menu" className="menu__button empty__button" >See our Menu</NavLink>
    </div>
  </div>
);

export default EmptyComponent;

