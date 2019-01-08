import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Header from './header';
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

  renderOrderItems = () => {
    return (
      <div>
        <h2 className="order__heading">
          <svg className="order__heading-image">
            <use xlinkHref={`${sprite}#chef`} />
          </svg>  
          <span>Order</span> 
        </h2>
        <div className="order__content order__content--margin">
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
            : <EmptyOrder />
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
export default connect(mapStateToProps, { updateItem, removeItemFromOrder })(Order);