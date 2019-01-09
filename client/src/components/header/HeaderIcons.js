import React, { Component } from "react";
import { connect } from "react-redux";

import IconItem from "./IconItem";

class HeaderIcons extends Component {
  state = {
    activeLink: []
  };

  toggleLink = linkIndex => {
    const { activeLink } = this.state;
    const updatedLinks = activeLink.map((_, index) =>
      linkIndex === index ? true : false
    );
    this.setState({ activeLink: updatedLinks });
  };

  componentDidMount() {
    if (this.props.active) {
      const links = [ false, false, false ];
      links[this.props.active] = true;
      this.setState({ activeLink: links });
    } else {
      this.setState({ activeLink: [true, false, false]})
    }
    
  }

  render() {
    const [first, second, third] = this.state.activeLink;
    return (
      <div className="header-icons">
        <IconItem
          name="menu"
          path="/menu"
          active={first}
          index={0}
          toggleLink={this.toggleLink}
          items={this.props.items}
        />
        <IconItem
          name="order"
          path="/order"
          active={second}
          index={1}
          toggleLink={this.toggleLink}
          items={this.props.items}
        />
        <IconItem
          name="wallet"
          path="/payment"
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
