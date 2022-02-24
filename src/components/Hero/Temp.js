import React from "react";
import img from "../../images/image-mockups.png";
import Button from "../Button/Button";
import {
  HeroContainer,
  HeroWrap,
  TextWrapper,
  Heading,
  Description,
  ImgWrap,
  HeroImg,
} from "./TempHero";

const Temp = () => {
  return (
    <HeroContainer>
      <HeroWrap>
        <TextWrapper>
          <Heading>Next generation digital banking</Heading>
          <Description>
            Take your financial lige online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Description>
          <Button />
        </TextWrapper>
        <ImgWrap>
          <HeroImg src={img} />
        </ImgWrap>
      </HeroWrap>
    </HeroContainer>
  );
};

export default Temp;
