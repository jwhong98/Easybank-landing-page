import styled from "styled-components";

export const InfoContainer = styled.section`
  background: hsl(220, 16%, 96%);
  padding: 3rem 1rem;
`;

export const InfoWrap = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: hsl(233, 26%, 24%);
`;

export const Subtitle = styled.p`
  color: hsl(233, 8%, 62%);
  font-size: 0.84rem;
  line-height: 1.5;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
`;
