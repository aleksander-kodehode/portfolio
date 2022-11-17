import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "./mediaQueriesBreakPoints";

//NAV BAR
export const navHeight = "60";

export const Nav = styled.nav`
  height: ${navHeight}px;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.secondaryBackground};
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
  @media ${device.tabletS} {
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.secondaryBackground};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
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
  transition: color cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms;
  cursor: pointer;
  &:hover {
    color: #7f5af0;
  }
`;

//AboutMe Section
export const DivSpacer = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
