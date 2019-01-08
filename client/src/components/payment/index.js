import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import Header from '../header';
import card from '../../img/card.svg';

class Payment extends Component {

  render() {
    return (
      <div className="payment">
        <Header activeLink={2} />
        {
          (this.props.items.length < 1)
            ? <EmptyOrder />
            : 'Payment'
        }
      </div>
    )
  }
}

const EmptyOrder = () => (
  <div>
    <h2 className="order__heading">Payment</h2>
    <div className="order__content">
      <img src={card} alt="Payment card" className="order__image" />
      <p className="order__message">No Item(s) to pay for</p>
      <NavLink to="/" className="menu__button order__button" >See our Menu</NavLink>
    </div>
  </div>
);

const mapStateToProps = ({ items }) => ({ items });
export default connect(mapStateToProps)(Payment);