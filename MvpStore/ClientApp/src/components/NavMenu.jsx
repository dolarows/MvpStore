import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import "./NavMenu.css";

class NavMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item>MvpStore</Menu.Item>
          <Menu.Item
            name="Customers"
            active={activeItem === "customers"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            Customers
          </Menu.Item>

          <Menu.Item
            name="products"
            active={activeItem === "products"}
            onClick={this.handleItemClick}
            as={Link}
            to="/products"
          >
            Products
          </Menu.Item>

          <Menu.Item
            name="stores"
            active={activeItem === "stores"}
            onClick={this.handleItemClick}
            as={Link}
            to="/stores"
          >
            Stores
          </Menu.Item>

          {/* <Menu.Item
            name="sales"
            active={activeItem === "sales"}
            onClick={this.handleItemClick}
            as={Link}
            to="/sales"
          >
            Sales
          </Menu.Item> */}
        </Menu>
      </Segment>
    );
  }
}

export default NavMenu;
