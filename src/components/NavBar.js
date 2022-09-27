import { Nav, NavList, NavItems } from "../componentsStyled/navStyles";
import { TEXT_AND_CONTENT } from "../pages/text/textContent";
import Switch from "./Switch";

const NavBar = () => {
  const NAVIGATION_BAR = TEXT_AND_CONTENT.NAVIGATION_BAR;

  return (
    <Nav>
      <NavList>
        <NavItems
          to="home"
          spy={true}
          activeClass="nav-bar-link-active"
          smooth={true}
          offset={-100}
        >
          {NAVIGATION_BAR.HOME}
        </NavItems>
        <NavItems
          to="about-me"
          spy={true}
          activeClass="nav-bar-link-active"
          smooth={true}
          offset={-100}
        >
          {NAVIGATION_BAR.ABOUT_ME}
        </NavItems>
        <NavItems
          to="projects"
          spy={true}
          activeClass="nav-bar-link-active"
          smooth={true}
          offset={-100}
        >
          {NAVIGATION_BAR.PROJECTS}
        </NavItems>
        <NavItems
          to="contact"
          spy={true}
          activeClass="nav-bar-link-active"
          smooth={true}
          offset={-100}
        >
          {NAVIGATION_BAR.CONTACT}
        </NavItems>
      </NavList>

      <Switch />
    </Nav>
  );
};

export default NavBar;
