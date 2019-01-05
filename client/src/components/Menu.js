import React, { Component } from "react";

import Sidebar from "./sidebar";
import HeaderIcons from "./header/HeaderIcons";
import MenuCategory from "./MenuCategory";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Sidebar />
        <div className="menu-content">
          <HeaderIcons />
          <div>
            <MenuCategory />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
