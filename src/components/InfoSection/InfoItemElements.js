import styled from "styled-components";
import { device } from "../../deviceSize";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  flex: 1;

  @media ${device.desktop} {
    align-items: flex-start;
    text-align: left;
    /* max-width: 250px; */
    gap: 1.5rem;
  }
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
