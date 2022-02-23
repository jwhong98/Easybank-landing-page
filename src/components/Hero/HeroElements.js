import styled from "styled-components";
import mobileBg from "../../images/bg-intro-mobile.svg";

export const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  text-align: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
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
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
  margin-top: -3rem;
`;
