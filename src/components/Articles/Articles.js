import React from "react";
import ArticleCard from "./ArticleCard";
import { ArticleContainer, Title, ArticleList } from "./ArticlesElements";
import { data } from "./data";

const Articles = () => {
  const createArticleCard = (info) => {
    return (
      <ArticleCard
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
      <Title>Latest Articles</Title>
      <ArticleList>{data.map(createArticleCard)}</ArticleList>
    </ArticleContainer>
  );
};

export default Articles;
