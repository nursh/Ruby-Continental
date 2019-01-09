import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Header from './header';
import EmptyComponent from './EmptyComponent';
import sprite from '../img/image-sprite.svg';
import Modal from './modal';
import { updateItem, removeItemFromOrder } from '../actions';

class Order extends Component {
  state = {
    show: false,
    item: null
  }

  showModal = (item) => {
    this.setState({ show: true, item });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  calcTotal = () => {
    return this.props.items.reduce((sum, item) => 
      sum += item.quantity * item.price, 0);
  }

  renderOrderItems = () => {
    return (
      <div>
        <h2 className="page__heading">
          <svg className="page__heading-image">
            <use xlinkHref={`${sprite}#chef`} />
          </svg>  
          <span>Order</span> 
        </h2>
        <div className="content content--margin">
          {
            this.props.items.map(item => (
              <div 
                className="order__modal"
                key={item.name}
              >
                <div className="order__item" onClick={() => this.showModal(item)}>
                  <span>{item.name}</span>
                  <span>{item.quantity}</span>
                  <span>&#8358;{item.quantity * item.price}</span>
                </div>
                <button className="order__remove"
                  onClick={() => this.props.removeItemFromOrder(item.name)}
                >
                  &times;
                </button>
              </div>
            ))
          }
          <h2 className="order__total">
            <span>Total:</span> 
            <span>&#8358;{this.calcTotal()}</span>
          </h2>
          <NavLink
            className="order__checkout"
            to="/payment"
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="order">
        <Header activeLink={1} />
        {
          this.props.items.length > 0 
            ? this.renderOrderItems() 
            : <EmptyComponent
                heading="Order"
                message="Our chefs are waiting for your order"
                src="chef" 
                img={false}
              />
        }
        <Modal
          hide={this.hideModal}
          show={this.state.show}
          item={this.state.item} 
          text="Update Order"
          action={this.props.updateItem}
        />
      </div>
    );
  }
}


const mapStateToProps = ({ items }) => ({ items })
export default connect(mapStateToProps, { 
  updateItem,
  removeItemFromOrder
})(Order);