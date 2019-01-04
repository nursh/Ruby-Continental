import React, { Component } from 'react';


import sprite from '../img/sprite.svg';
import menuCategories from '../utils/categories';


class Sidebar extends Component {

  renderCategories() {
    return menuCategories().map(({ name, src }) => {
      return (
        <div key={name} className="sidebar__item">
          <svg className="sidebar__icon">
            <use xlinkHref={`${sprite}#${src}`} />
          </svg>
          <span className="sidebar__name">{name}</span>
        </div>
      );
    });
  }

  render() {

    return (
      <div className="sidebar">
        <h1 className="main-title main-title--big text-center">Ruby Continental</h1>
        <div className="sidebar__categories">
          {this.renderCategories()}
        </div>
      </div>
    );
  }
}

export default Sidebar;