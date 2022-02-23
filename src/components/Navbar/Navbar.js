import React from "react";
import logo from "../../images/logo.svg";
import mobile from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import { Nav, NavContent, Logo, MobileIcon } from "./NavbarElements";

const Navbar = (props) => {
  return (
    <Nav>
      <NavContent>
        <Logo src={logo} />
        {/* NavMenu
            Button
         */}
      </NavContent>
      <MobileIcon
        src={props.isOpen ? close : mobile}
        onClick={props.onToggle}
      />
    </Nav>
  );
};

export default Navbar;
