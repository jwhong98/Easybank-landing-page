import styled from "styled-components";
import { device } from "../../deviceSize";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: absolute;
  z-index: 20;
  background-color: #fff;

  @media ${device.desktop} {
    position: relative;
  }
`;

export const NavContent = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const MobileIcon = styled.img`
  cursor: pointer;
`;
