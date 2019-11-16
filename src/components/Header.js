import React, { Component } from "react";

import ToggleIcon from "./icons/toggle-icon";
import freelogo from "./images/free_logo_small.png";
import NavigationItems from "./NavigationItems";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="header" sticky="top" expand="md">
        <NavbarBrand href="/" className="logo">
          <img class="header-logo" src={freelogo} />
          {"  "}SEARCH PARTY
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className="mr-2">
          <ToggleIcon open={this.state.isOpen} />
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavigationItems popupIsClosing={this.props.popupIsClosing} />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
