import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';


import menuCategories from "../utils/categories";
import Sidebar from "./sidebar";
import HeaderIcons from "./header/HeaderIcons";
import MenuCategory from "./MenuCategory";
import Loading from './Loading';
import { getMenuItems } from '../graphql/MenuItems';
import { addItemToOrder } from '../actions';


class Menu extends Component {

  state = {
    selectedItem: null,
    menuItems: null
  }

  getSelectedItem = (item) => {
    const menuItems = this.props.data.menuItems
      .filter(mItem => mItem.category === item.category);
    this.setState({ selectedItem: item, menuItems });
  }

  render() {
    const { menuItems } = this.props.data;
    if (!menuItems) return <Loading />;
    const allCategories = [...new Set(menuItems.map(item => item.category))];
    const categories = menuCategories(allCategories);
    return (
      <div className="menu" id="menu">
        <Sidebar
          categories={categories}
          getSelectedItem={this.getSelectedItem} />
        <div className="menu-content">
          <HeaderIcons />
          <div>
            <MenuCategory
              categories={categories}
              selectedItem={this.state.selectedItem}
              menuItems={this.state.menuItems}
              addItemToOrder={this.props.addItemToOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items });
export default graphql(getMenuItems)(connect(mapStateToProps, { addItemToOrder })(Menu));
