import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import sprite from '../../img/sprite.svg';

class IconItem extends Component {

  toggleLink = () => {
    const { index } = this.props
    this.props.toggleLink(index);
  }

  render() {
    const { name, path, active } = this.props;
    const selected = active ? 'header-icons__link--active': '';
    return (
      <div className="header-icons__item">
        <NavLink
          to={path}
          className="header-icons__link"
          activeClassName={selected}
          onClick={() => this.toggleLink()}
        >
          <svg className="header-icons__icon">
            <use xlinkHref={`${sprite}#${name}`} />
          </svg>
        </NavLink>
      </div>
    );
  }
}

export default IconItem;