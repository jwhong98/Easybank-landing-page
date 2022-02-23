import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Overlay = styled.div`
  position: absolute;
  width: 90%;
  background-color: #fff;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 30;
  padding: 1.5rem;
  top: 5rem;
  text-align: center;
  border-radius: 5px;
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.li`
  font-weight: 400;
  height: 1.5rem;
  text-transform: capitalize;
  :hover {
    /* padding-bottom: 5px; */
    background: linear-gradient(
        to right,
        hsl(136, 65%, 51%),
        hsl(192, 70%, 51%)
      )
      left bottom #fff no-repeat;
    background-size: 100% 5px;
  }
`;
