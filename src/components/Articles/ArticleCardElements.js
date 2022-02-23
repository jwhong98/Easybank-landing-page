import styled from "styled-components";

export const Card = styled.li`
  background-color: #fff;
  border-radius: 5px;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.75rem;
  text-align: left;
`;

export const Author = styled.p`
  text-transform: capitalize;
  font-size: 0.65rem;
  color: hsl(233, 8%, 62%);
`;

export const Title = styled.p`
  color: hsl(233, 26%, 24%);
`;

export const Subtitle = styled.p`
  font-size: 0.73rem;
  color: hsl(233, 8%, 62%);
`;
