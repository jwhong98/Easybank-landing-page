import React from "react";
import {
  InfoContainer,
  InfoWrap,
  InfoTextWrap,
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
        key={info.id}
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
        <InfoTextWrap>
          <Title>Why choose Easybank?</Title>
          <Subtitle>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.{" "}
          </Subtitle>
        </InfoTextWrap>

        <InfoList>{data.map(createItem)}</InfoList>
      </InfoWrap>
    </InfoContainer>
  );
};

export default InfoSection;
