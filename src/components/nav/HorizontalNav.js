import { NavList, NavItems } from "../../componentsStyled/navStyles";
import Switch from "./Switch";
import { navHeight } from "../../componentsStyled/navStyles";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const HorizontalNav = ({ open }) => {
  const { t } = useTranslation();
  return (
    <>
      <LanguageSwitcher />
      <NavList open={open}>
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
    </>
  );
};

export default HorizontalNav;
