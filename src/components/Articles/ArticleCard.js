import React from "react";
import {
  Card,
  ImgWrap,
  CardImg,
  TextWrap,
  Author,
  Title,
  Subtitle,
} from "./ArticleCardElements";

const ArticleCard = (props) => {
  return (
    <Card>
      <ImgWrap>
        <CardImg src={props.img} alt={props.alt} />
      </ImgWrap>
      <TextWrap>
        <Author>by {props.author}</Author>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TextWrap>
    </Card>
  );
};

export default ArticleCard;
