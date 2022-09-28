import { Nav, NavList, NavItems } from "../componentsStyled/navStyles";
import { TEXT_AND_CONTENT } from "../pages/text/textContent";
import Switch from "./Switch";
import { navHeight } from "../componentsStyled/navStyles";
const NavBar = () => {
  const NAVIGATION_BAR = TEXT_AND_CONTENT.NAVIGATION_BAR;

  return (
    <Nav>
      <NavList>
        <li>
          <NavItems
            to="home"
            spy={true}
            activeClass="nav-bar-link-active"
            smooth={true}
            offset={-navHeight}
          >
            {NAVIGATION_BAR.HOME}
          </NavItems>
        </li>
        <li>
          <NavItems
            to="about-me"
            spy={true}
            activeClass="nav-bar-link-active"
            smooth={true}
            offset={-navHeight}
          >
            {NAVIGATION_BAR.ABOUT_ME}
          </NavItems>
        </li>
        <li>
          <NavItems
            to="projects"
            spy={true}
            activeClass="nav-bar-link-active"
            smooth={true}
            offset={-navHeight}
          >
            {NAVIGATION_BAR.PROJECTS}
          </NavItems>
        </li>
        <li>
          <NavItems
            to="contact"
            spy={true}
            activeClass="nav-bar-link-active"
            smooth={true}
            offset={-navHeight}
          >
            {NAVIGATION_BAR.CONTACT}
          </NavItems>
        </li>
      </NavList>

      <Switch />
    </Nav>
  );
};

export default NavBar;
