import React, { Component } from 'react';
import update from 'immutability-helper';


class Modal extends Component {
  state = {
    quantity: 0
  }

  addQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }));
  }

  reduceQuantity = () => {
    const newState = update(this.state, {
      quantity: {
        $apply: (x) => {
          x -= 1;
          return x <= 0 ? 0 : x; 
        }
      }
    });
    const { quantity } = newState;
    this.setState({ quantity });
  }

  render() {
    return (
      <div className="modal" id="modal">
        <div className="modal__content">
          <h4 className="modal__heading">Orange Juice</h4>
          <a href="#menu" className="modal__close">&times;</a>
          <div className="modal__body">
            <button className="modal__button" onClick={this.reduceQuantity}>-</button>
            <span className="modal__quantity">{this.state.quantity}</span>
            <button className="modal__button" onClick={this.addQuantity}>+</button>
          </div>
          <button className="modal__order">Add to order</button>
        </div>
      </div>
    );
  }
}

export default Modal;