import React from "react";
import {
  InfoContainer,
  InfoWrap,
  Title,
  Subtitle,
  InfoList,
} from "./InfoSectionElements";
import { data } from "./data";
import InfoItem from "./InfoItem";

const InfoSection = () => {
  const createItem = (info) => {
    return (
      <InfoItem
        img={info.img}
        alt={info.alt}
        title={info.title}
        subtitle={info.subtitle}
      />
    );
  };
  return (
    <InfoContainer>
      <InfoWrap>
        <Title>Why choose Easybank?</Title>
        <Subtitle>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.{" "}
        </Subtitle>
      </InfoWrap>
      <InfoList>{data.map(createItem)}</InfoList>
    </InfoContainer>
  );
};

export default InfoSection;
