import React, { Component } from 'react';


import sprite from '../img/sprite.svg';


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="main-title main-title--big text-center">Ruby Continental</h1>
        <div className="sidebar__categories">
          <svg className="sidebar__icon">
            <use xlinkHref={`${sprite}#african-hot-pot`} />
          </svg>
        </div>
      </div>
    );
  }
}

export default Sidebar;