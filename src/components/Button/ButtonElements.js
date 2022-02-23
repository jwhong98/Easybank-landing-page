import styled from "styled-components";

export const BtnWrap = styled.div`
  background-color: #fff;
  border-radius: 25px;
`;

export const Btn = styled.button`
  padding: 0.75rem 2rem;
  background: linear-gradient(45deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  color: #fff;
  border: none;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.84rem;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;
