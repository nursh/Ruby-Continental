import React, { Component } from 'react';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';


class CheckoutElements extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Playing with stripe lements');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="payment__form">
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <button className="payment__button">Checkout</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutElements);