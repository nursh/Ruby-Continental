import React, { Component } from 'react';
import { injectStripe,
  CardNumberElement,
  CardExpiryElement, 
  CardCVCElement } from 'react-stripe-elements';



class CheckoutElements extends Component {

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const token = await this.props.stripe.createToken() 
    token.amount = this.props.total;
    console.log(token);
  }

  style = {
    base: {
      fontSize: '18px',
      textAlign: 'center',
      color: '#464A5F',
    },
    complete: {
      color: '#64BC82'
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="payment__form">
        <div className="payment__form__element">
          <CardNumberElement style={this.style} className="payment__card" />
        </div>
        <div className="payment__form__element payment__form__element--small">
          <div>
            <CardExpiryElement style={this.style} className="payment__card" />
          </div>

          <div>
            <CardCVCElement style={this.style} className="payment__card" />
          </div>
        </div>

        <button className="payment__button">Checkout</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutElements);