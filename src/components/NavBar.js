import { Nav, NavList, NavItems } from "../componentsStyled/navStyles";
import { TEXT_AND_CONTENT } from "../pages/text/textContent";

const NavBar = () => {
  //const { NAV_TEXT } = TEXT_AND_CONTENT.NAVIGATION_BAR;
  //console.log();
  //BUG: Why doesn't this work?
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
          {TEXT_AND_CONTENT.NAVIGATION_BAR.HOME}
        </NavItems>
        <NavItems
          to="about-me"
          spy={true}
          activeClass="nav-bar-link-active"
          smooth={true}
          offset={-100}
        >
          {TEXT_AND_CONTENT.NAVIGATION_BAR.ABOUT_ME}
        </NavItems>
        <NavItems
          to="projects"
          spy={true}
          activeClass="nav-bar-link-active"
          smooth={true}
          offset={-100}
        >
          {TEXT_AND_CONTENT.NAVIGATION_BAR.PROJECTS}
        </NavItems>
        <NavItems
          to="contact"
          spy={true}
          activeClass="nav-bar-link-active"
          smooth={true}
          offset={-100}
        >
          {TEXT_AND_CONTENT.NAVIGATION_BAR.CONTACT}
        </NavItems>
      </NavList>

      <button>"🌙"</button>
    </Nav>
  );
};

export default NavBar;
