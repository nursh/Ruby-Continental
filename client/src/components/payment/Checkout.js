import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';


import CheckoutElements from './CheckoutElements';

class Checkout extends Component {

  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
        <Elements>
          <CheckoutElements total={this.props.total} />
        </Elements>
      </StripeProvider>
    );
  }
}

export default Checkout;