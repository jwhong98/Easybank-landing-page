import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: hsl(233, 26%, 24%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  color: #fff;
  gap: 2rem;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled.img`
  width: auto;
  /* temporary solution */
  filter: brightness(0) invert(1);
  cursor: pointer;
`;

export const SocialsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.75rem;
`;

export const ListItem = styled.li`
  text-align: center;
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: 300;
  cursor: pointer;

  :hover {
    color: hsl(136, 65%, 51%);
  }
`;

export const Icon = styled.img`
  width: 1.25rem;

  :hover {
    filter: invert(68%) sepia(24%) saturate(1332%) hue-rotate(83deg)
      brightness(95%) contrast(87%);
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
`;

export const Legal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Copyright = styled.p`
  text-transform: capitalize;
  font-size: 0.9rem;
  color: hsl(233, 8%, 62%);
`;
