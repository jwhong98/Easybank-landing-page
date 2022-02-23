import React from "react";
import Button from "../Button/Button";
import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import {
  FooterContainer,
  Socials,
  Logo,
  SocialsList,
  ListItem,
  Icon,
  FooterList,
  Legal,
  Copyright,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <Socials>
        <Logo src={logo} />
        <SocialsList>
          <ListItem>
            <Icon src={facebook} alt="Facebook" />
          </ListItem>
          <ListItem>
            <Icon src={youtube} alt="Facebook" />
          </ListItem>
          <ListItem>
            <Icon src={twitter} alt="Facebook" />
          </ListItem>
          <ListItem>
            <Icon src={pinterest} alt="Facebook" />
          </ListItem>
          <ListItem>
            <Icon src={instagram} alt="Facebook" />
          </ListItem>
        </SocialsList>
      </Socials>
      <FooterList>
        <ListItem>about us</ListItem>
        <ListItem>contact</ListItem>
        <ListItem>blog</ListItem>
        <ListItem>careers</ListItem>
        <ListItem>support</ListItem>
        <ListItem>privacy policy</ListItem>
      </FooterList>
      <Legal>
        <Button />
        <Copyright>© easybank. all rights reserved</Copyright>
      </Legal>
    </FooterContainer>
  );
};

export default Footer;
