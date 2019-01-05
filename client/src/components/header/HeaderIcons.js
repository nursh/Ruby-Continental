import React, { Component } from 'react';


import IconItem from './IconItem';

class HeaderIcons extends Component {

  state = {
    activeLink: [true, false, false]
  }

  render() {
    const [ first, second, third ] = this.state.activeLink;
    return (
      <div className="header-icons">
        <IconItem name="menu" path="/" active={first} />
        <IconItem name="order"  path="/" active={second} />
        <IconItem name="wallet" path="/" active={third} />
      </div>
    )
  }
}

export default HeaderIcons;