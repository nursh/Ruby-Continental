import React, { Component } from 'react';


import Modal from './modal';
import sprite from '../img/sprite.svg';

class MenuCategory extends Component {

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

  render() {
    if (!this.props.selectedItem) return `Select a menu item`
    const { name, src } = this.props.selectedItem;
    return (
      <div className="menu-category">
        <svg className="menu-category__icon">
          <use xlinkHref={`${sprite}#${src}`} />
        </svg>
        <h3 className="menu-category__heading">{name}</h3>
        <div className="menu-category__items">
          {
            this.props.menuItems.map(item => (
              <div 
                className="menu-category__modal"
                key={item.name}
                onClick={() => this.showModal(item)}
              >
                <div className="menu-category__item">
                  <span>{item.name}</span>
                  <span>&#8358;{item.price}</span>
                </div>
              </div>
            ))
          }
          <Modal
            hide={this.hideModal}
            show={this.state.show}
            item={this.state.item} 
            quantity={0}
          />
        </div>

      </div>
    );
  }
}

export default MenuCategory;