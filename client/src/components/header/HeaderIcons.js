import React, { Component } from "react";
import { connect } from 'react-redux';


import IconItem from "./IconItem";

class HeaderIcons extends Component {
  state = {
    activeLink: [true, false, false]
  };

  toggleLink = linkIndex => {
    const { activeLink } = this.state;
    const updatedLinks = activeLink.map((_, index) =>
      linkIndex === index ? true : false
    );
    this.setState({ activeLink: updatedLinks });
  };

  render() {
    const [first, second, third] = this.state.activeLink;
    return (
      <div className="header-icons">
        <IconItem
          name="menu"
          path="/"
          active={first}
          index={0}
          toggleLink={this.toggleLink}
          items={this.props.items}
        />
        <IconItem
          name="order"
          path="/"
          active={second}
          index={1}
          toggleLink={this.toggleLink}
          items={this.props.items}
        />
        <IconItem
          name="wallet"
          path="/"
          active={third}
          index={2}
          toggleLink={this.toggleLink}
          items={this.props.items}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items });
export default connect(mapStateToProps)(HeaderIcons);
