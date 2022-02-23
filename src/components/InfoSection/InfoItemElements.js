import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

export const ItemImg = styled.img``;

export const Title = styled.p`
  color: hsl(233, 26%, 24%);
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export const Subtitle = styled.p`
  color: hsl(233, 8%, 62%);
  font-size: 0.84rem;
  line-height: 1.5;
`;
