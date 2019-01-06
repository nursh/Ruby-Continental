import React, { Component } from 'react';


import Modal from './modal';
import sprite from '../img/sprite.svg';

class MenuCategory extends Component {

  render() {
    return (
      <div className="menu-category">
        <svg className="menu-category__icon">
          <use xlinkHref={`${sprite}#juice`} />
        </svg>
        <h3 className="menu-category__heading">Juice</h3>
        <div className="menu-category__items">
          <a href="#modal" className="menu-category__modal">
            <div className="menu-category__item">
              <span>Orange Juice</span>
              <span>&#8358;500</span>
            </div>
          </a>
        </div>
        <Modal />
      </div>
    );
  }
}

export default MenuCategory;