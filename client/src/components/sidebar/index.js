import React, { Component } from "react";

import menuCategories from "../../utils/categories";
import SidebarItem from "./SidebarItem";

class Sidebar extends Component {
  state = {
    activeItems: []
  };

  toggleActiveItems = index => {
    const { activeItems } = this.state;
    const updatedItems = activeItems.map((item, itemNo) =>
      itemNo === index ? true : false
    );
    this.setState({ activeItems: updatedItems });
  };

  componentDidMount() {
    const activeItems = menuCategories().map(item => false);
    this.setState({ activeItems });
  }

  renderCategories() {
    const { activeItems } = this.state;
    return menuCategories().map(({ name, src }, index) => {
      console.log(activeItems[index]);
      return (
        <SidebarItem
          key={name}
          name={name}
          src={src}
          index={index}
          active={activeItems[index]}
          toggleActiveItems={this.toggleActiveItems}
        />
      );
    });
  }

  render() {
    return (
      <div className="sidebar">
        <h1 className="main-title main-title--big text-center">
          Ruby Continental
        </h1>
        <div className="sidebar__categories">{this.renderCategories()}</div>
      </div>
    );
  }
}

export default Sidebar;
