import { Nav, NavList, NavItems } from "../componentsStyled/navStyles";
import { TEXT_AND_CONTENT } from "../pages/text/textContent";
import Switch from "./Switch";
import { navHeight } from "../componentsStyled/navStyles";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const NAVIGATION_BAR = TEXT_AND_CONTENT.NAVIGATION_BAR;
  const { t } = useTranslation();
  return (
    <Nav>
      <LanguageSwitcher />
      <NavList>
        <li>
          <NavItems
            to="home"
            spy={true}
            activeClass="nav-bar-link-active"
            smooth={true}
            offset={-navHeight}
          >
            {t("navbar.home")}
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
            {t("navbar.about")}
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
            {t("navbar.projects")}
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
            {t("navbar.contact")}
          </NavItems>
        </li>
      </NavList>

      <Switch />
    </Nav>
  );
};

export default NavBar;
