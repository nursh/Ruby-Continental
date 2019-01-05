import React, { Component } from 'react';


import sprite from '../img/sprite.svg';

class MenuCategory extends Component {

  render() {
    return (
      <div className="menu-category">
        <svg className="menu-category__icon">
          <use xlinkHref={`${sprite}#juice`} />
        </svg>
        <h3 className="menu-category__heading">Juice</h3>

      </div>
    );
  }
}

export default MenuCategory;