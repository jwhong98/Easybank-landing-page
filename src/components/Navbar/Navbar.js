import React from "react";
import logo from "../../images/logo.svg";
import mobile from "../../images/icon-hamburger.svg";
import { Nav, NavContent, Logo, MobileIcon } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavContent>
        <Logo src={logo} />
        {/* NavMenu
            Button
         */}
      </NavContent>
      <MobileIcon src={mobile} />
    </Nav>
  );
};

export default Navbar;
