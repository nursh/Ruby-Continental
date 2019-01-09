import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import Header from '../header';
import card from '../../img/card.svg';
import Checkout from './Checkout';
import EmptyComponent from '../EmptyComponent';

class Payment extends Component {
  render() {
    return (
      <div className="payment">
        <Header activeLink={2} />
        {
          (this.props.items.length < 1)
            ? <EmptyComponent
                heading="Payment"
                img={true}
                src=""
                message="No Item(s) to pay for"
              />
            : <PaymentForm />
        }
      </div>
    )
  }
}

const PaymentForm = () => (
  <div>
    <h2 className="page__heading">
      <img src={card} alt="Payment card" className="page__heading-image" />
      <span>Payment</span> 
    </h2>
    <Checkout />
  </div>
);

const mapStateToProps = ({ items }) => ({ items });
export default connect(mapStateToProps)(Payment);