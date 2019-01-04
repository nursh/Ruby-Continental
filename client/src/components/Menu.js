import React, { Component } from "react";

import Sidebar from "./Sidebar";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Sidebar />
        <div className="menu-content">
          Menu Content
        </div>
      </div>
    );
  }
}

export default Menu;
