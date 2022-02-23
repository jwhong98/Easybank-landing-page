import React from "react";
import ArticleCard from "./ArticleCard";
import {
  ArticleContainer,
  ArticleWrapper,
  Title,
  ArticleList,
} from "./ArticlesElements";
import { data } from "./data";

const Articles = () => {
  const createArticleCard = (info) => {
    return (
      <ArticleCard
        key={info.id}
        img={info.img}
        alt={info.alt}
        author={info.author}
        title={info.title}
        subtitle={info.subtitle}
      />
    );
  };
  return (
    <ArticleContainer>
      <ArticleWrapper>
        <Title>Latest Articles</Title>
        <ArticleList>{data.map(createArticleCard)}</ArticleList>
      </ArticleWrapper>
    </ArticleContainer>
  );
};

export default Articles;
