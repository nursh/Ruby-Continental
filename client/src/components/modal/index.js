import React, { Component } from 'react';
import update from 'immutability-helper';


class Modal extends Component {
  state = {
    quantity: 0
  }

  hide = () => {
    this.setState({ quantity: 0 });
    this.props.hide();
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
    const { show, hide } = this.props;
    const item = (!this.props.item) ? '' : this.props.item;
    const className = show ? 'modal modal--display' : 'modal--display-none'
    return (
      <div className={className} id="modal">
        <div className="modal__content">
          <h4 className="modal__heading">{item.name}</h4>
          <a href="#" className="modal__close" onClick={this.hide}>&times;</a>
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