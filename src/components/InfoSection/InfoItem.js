import React from "react";
import { Item, ItemImg, Title, Subtitle } from "./InfoItemElements";

const InfoItem = (props) => {
  return (
    <Item>
      <ItemImg src={props.img} alt={props.alt} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Item>
  );
};

export default InfoItem;
