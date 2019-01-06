import React, { Component } from 'react';


import sprite from '../img/sprite.svg';

class MenuCategory extends Component {

  shout = () => {
    alert('Hurray');
  }

  render() {
    return (
      <div className="menu-category">
        <svg className="menu-category__icon">
          <use xlinkHref={`${sprite}#juice`} />
        </svg>
        <h3 className="menu-category__heading">Juice</h3>
        <div className="menu-category__items">
          <div className="menu-category__item" onClick={this.shout}>
            <span>Orange Juice</span>
            <span>&#8358;500</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCategory;