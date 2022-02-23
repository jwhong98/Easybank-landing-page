import styled from "styled-components";
import mobileBg from "../../images/bg-intro-mobile.svg";
import desktopBg from "../../images/bg-intro-desktop.svg";
import { device } from "../../deviceSize";

export const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-color: hsl(0, 0%, 98%);
  gap: 1rem;

  @media ${device.desktop} {
    position: relative;
    display: inline-flex;
    flex-direction: row;
    height: 650px;
    gap: 0;
  }
`;

export const TextContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  text-align: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  @media ${device.desktop} {
    max-width: 420px;
    text-align: left;
    align-items: flex-start;
  }
`;

export const Heading = styled.p`
  font-size: 2.25rem;
  color: hsl(233, 26%, 24%);
`;

export const Description = styled.p`
  color: hsl(233, 8%, 62%);
  font-size: 0.84rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

export const ImgWrap = styled.div`
  width: 100%;
  min-height: 350px;
  background-image: url(${mobileBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 1rem;

  @media ${device.desktop} {
    background-image: url(${desktopBg});
    background-size: contain;
    background-position: top;
    width: 80%;
    /* max-height: 800px;
    background-position: center;
    padding: 0;
    position: absolute;
    left: 50%; */
    display: none;
  }
`;

export const HeroImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: -3rem;

  @media ${device.desktop} {
    margin-left: 15rem;
  }
`;
