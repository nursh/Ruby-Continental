import React, { Component } from "react";
import { graphql } from 'react-apollo';


import menuCategories from "../utils/categories";
import Sidebar from "./sidebar";
import HeaderIcons from "./header/HeaderIcons";
import MenuCategory from "./MenuCategory";
import { getMenuItems } from '../graphql/MenuItems';

class Menu extends Component {

  render() {
    console.log(this.props.data);
    const categories = menuCategories();
    return (
      <div className="menu" id="menu">
        <Sidebar categories={categories}/>
        <div className="menu-content">
          <HeaderIcons />
          <div>
            <MenuCategory categories={categories} />
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getMenuItems)(Menu);
