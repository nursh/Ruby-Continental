import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Header from './header';
import sprite from '../img/image-sprite.svg';

class Order extends Component {

  render() {
    console.log(this.props.items);
    return (
      <div className="order">
        <Header activeLink={1} />
        {
          this.props.items.length > 0 ? 'Table' : <EmptyOrder />
        }
      </div>
    );
  }
}

const EmptyOrder = () => (
  <div>
    <h2 className="order__heading">Order</h2>
    <div className="order__content">
      <svg className="order__image">
        <use xlinkHref={`${sprite}#chef`} />
      </svg>
      <p className="order__message">Our chefs are waiting for your order</p>
      <NavLink to="/" className="menu__button order__button" >See our Menu</NavLink>
    </div>
  </div>
);

const mapStateToProps = ({ items }) => ({ items })
export default connect(mapStateToProps)(Order);