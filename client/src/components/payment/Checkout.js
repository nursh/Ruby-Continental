import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';


import CheckoutElements from './CheckoutElements';

class Checkout extends Component {

  render() {
    return (
      <StripeProvider apiKey="pk_test_oBVdfkOc88MQrgX4jy2nWneA">
        <Elements>
          <CheckoutElements total={this.props.total} />
        </Elements>
      </StripeProvider>
    );
  }
}

export default Checkout;