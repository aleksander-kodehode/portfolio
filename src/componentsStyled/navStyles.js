import styled from "styled-components";
import { Link } from "react-scroll";

//NAV BAR
export const navHeight = "60";

export const Nav = styled.nav`
  height: ${navHeight}px;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  background: ${(props) => props.theme.darkTheme.darkGrey};
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 1;
`;
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;
export const NavItems = styled(Link)`
  background: brown;
  color: white;
  height: 2rem;
  margin-right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #7f5af0;
  }
`;

//AboutMe Section
export const DivSpacer = styled.div`
  height: 120vh;
`;
