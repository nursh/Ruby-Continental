import React, { Component } from "react";


import menuCategories from "../utils/categories";
import Sidebar from "./sidebar";
import HeaderIcons from "./header/HeaderIcons";
import MenuCategory from "./MenuCategory";

class Menu extends Component {

  render() {
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

export default Menu;
