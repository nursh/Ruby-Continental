import React, { Component } from 'react';
import { injectStripe,
  CardNumberElement,
  CardExpiryElement, 
  CardCVCElement } from 'react-stripe-elements';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';


import { createOrder, updateOrder } from '../../graphql/Order';
import { createOrderItem } from '../../graphql/OrderItems';
import { setOrderId } from '../../actions';


class CheckoutElements extends Component {

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const token = await this.props.stripe.createToken() 
    const orderId = await this.createOrder();
    token.amount = this.props.total;
    token.orderId = orderId;
    console.log(token);
  }

  createOrder = async () => {
    const order = await this.props.createOrder();
    const { createOrder } = order.data;
    const { id } = createOrder;
    await this.props.updateOrder({
      variables: {
        id,
        total: this.props.total
      }
    });
    this.props.items.map(async ({ name, quantity, price }) => {
      await this.props.createOrderItem({
        variables: {
          name, 
          quantity,
          price,
          order: id
        }
      })
    });
    return id;
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


const mapStateToProps = ({ order, items, total }) => ({ order, items, total });
export default connect(mapStateToProps, {
    pure: false,
    setOrderId
})(injectStripe(
  (compose(
    graphql(createOrder, { name: 'createOrder' }),
    graphql(updateOrder, { name: 'updateOrder' }),
    graphql(createOrderItem, { name: 'createOrderItem' })
  )(CheckoutElements))));