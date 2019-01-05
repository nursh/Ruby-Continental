import React, { Component } from 'react';


import sprite from '../../img/sprite.svg';

class SidebarItem extends Component {

  toggleActive = (index) => {
    this.props.toggleActiveItems(index);
  }

  render() {
    const { name, src, index } = this.props;

    let classNames = 'sidebar__item ';
    classNames += (this.props.active) ? 'sidebar__item--active' : '';

    return (
      <div key={name} className={classNames} onClick={() => this.toggleActive(index)}>
        <a href="#" className="sidebar__link">
          <svg className="sidebar__icon">
            <use xlinkHref={`${sprite}#${src}`} />
          </svg>
          <span>{name}</span>
        </a>
      </div>
    );
  }
}

export default SidebarItem;