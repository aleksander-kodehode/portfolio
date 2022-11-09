//import { Link } from "react-scroll";
import { Trans, useTranslation } from "react-i18next";
import SkillsIcons from "../components/skills/SkillsIcons";
import WaveBgAlt from "../components/WaveBgAlt";
import { DivSpacer } from "../componentsStyled/navStyles";
import {
  AboutWrapper,
  SkillWrapper,
  TextContentWrapper,
} from "../componentsStyled/pageStyles/aboutMeStyles";
import { MainWrapperAlt } from "../componentsStyled/pageStyles/mainWrapperStyle";
import { SectionHeading } from "../componentsStyled/typographyStyles";

const AboutMePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <WaveBgAlt />
      <MainWrapperAlt id="about-me">
        <DivSpacer>
          <SectionHeading>{t("about.heading")}</SectionHeading>
          <AboutWrapper>
            <TextContentWrapper>
              <Trans i18nKey="about.aboutText">
                <p>
                  I’m currently learning how to code through “Kodehode”, in my
                  spare time I enjoy messing around with selfhosted services and
                  apps through Docker, playing interesting games that takes up
                  way too much time. One of my big passions is cooking and
                  collecting handmade Japanese knifes.
                </p>
                <p>
                  Recently I have been doing a deep dive into the world of
                  coding, which I find extremely fun and instructive. I am
                  mostly interested in how apps and websites work on the
                  backend, but I find that styling and making things look good
                  is also a lot of fun!
                </p>
              </Trans>
              {/* <p>
            You can reach out to me on my{" "}
            <Link
              as="a"
              to="contact"
              spy={true}
              activeClass="nav-bar-link-active"
              smooth={true}
              offset={-navHeight}
            >
              MY PROJECTS
            </Link>
          </p> */}
            </TextContentWrapper>
            <div>
              <SkillWrapper>
                <h2>{t("about.skillHeading")}</h2>
                <SkillsIcons />
              </SkillWrapper>
            </div>
          </AboutWrapper>
        </DivSpacer>
      </MainWrapperAlt>
    </>
  );
};

export default AboutMePage;
