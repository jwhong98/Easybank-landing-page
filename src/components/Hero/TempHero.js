import styled from "styled-components";
import mobileBg from "../../images/bg-intro-mobile.svg";
import desktopBg from "../../images/bg-intro-desktop.svg";
import { device } from "../../deviceSize";

export const HeroContainer = styled.section`
  width: 100%;
  background-color: hsl(0, 0%, 98%);
  position: relative;

  @media ${device.desktop} {
    /* temp */
    background-image: url(${desktopBg});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 350% 70%;
    /* temp */

    height: 650px;
  }
`;

export const HeroWrap = styled.div`
  width: 100%;
  max-width: 1110px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  @media ${device.desktop} {
    flex-direction: row;
    gap: 0;
  }
`;

// export const TextContainer = styled.div`
//   @media ${device.desktop} {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 40%;
//   }
// `;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  max-height: 650px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;

  @media ${device.desktop} {
    max-width: 420px;
    text-align: left;
    align-items: flex-start;
    padding: 0;
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
    background-image: none;
    padding: 0;
    position: relative;
  }
`;

export const HeroImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: -3rem;

  @media ${device.desktop} {
    max-width: unset;
    margin-top: -7rem;
    position: absolute;
    z-index: 10;
    right: -43%;
  }
`;
