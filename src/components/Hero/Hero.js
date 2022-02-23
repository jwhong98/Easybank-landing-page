import React from "react";
import img from "../../images/image-mockups.png";
import Button from "../Button/Button";
import {
  HeroContainer,
  TextContainer,
  TextWrapper,
  Heading,
  Description,
  ImgWrap,
  HeroImg,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <TextWrapper>
          <Heading>Next generation digital banking</Heading>
          <Description>
            Take your financial lige online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Description>
          <Button />
        </TextWrapper>
      </TextContainer>
      <ImgWrap>
        <HeroImg src={img} />
      </ImgWrap>
    </HeroContainer>
  );
};

export default Hero;
