import React, { Component } from "react";

import Sidebar from "./sidebar";
import HeaderIcons from "./header/HeaderIcons";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Sidebar />
        <div className="menu-content">
          <HeaderIcons />
        </div>
      </div>
    );
  }
}

export default Menu;
