import styled from "styled-components";
import { device } from "../../deviceSize";

export const ArticleContainer = styled.section`
  padding: 3rem 1rem;
  text-align: center;
  background-color: hsl(0, 0%, 98%);

  @media ${device.desktop} {
    text-align: left;
  }
`;

export const ArticleWrapper = styled.div`
  max-width: 1110px;
  margin: auto;
`;

export const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: hsl(233, 26%, 24%);
`;

export const ArticleList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;
