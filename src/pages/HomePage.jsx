import { Trans, useTranslation } from "react-i18next";
import { BtnGreenScroll } from "../componentsStyled/buttonsStyles";
import { navHeight } from "../componentsStyled/navStyles";
import {
  FillScreen,
  FlexContainerRow,
  GreetingsDiv,
  ImgContainer,
  PreHeading,
  ProfilePic,
  PurpleText,
  WelcomeHeading,
} from "../componentsStyled/pageStyles/homePageStyles";
import { TEXT_AND_CONTENT } from "./text/textContent";

const content = TEXT_AND_CONTENT.WELCOME_PAGE;

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <FillScreen id="home">
      <FlexContainerRow>
        <GreetingsDiv>
          <ImgContainer>
            <ProfilePic src={content.IMAGES} alt="Portrait"></ProfilePic>
          </ImgContainer>
          <div>
            <PreHeading>
              <PurpleText>- </PurpleText>
              {t("home.preHeading")}
            </PreHeading>
            <WelcomeHeading>
              <Trans i18nKey="home.heading">
                I'm <PurpleText>Aleksander</PurpleText> Grubstad Hoff
              </Trans>
            </WelcomeHeading>
          </div>
          <p>{t("home.subHeading")}</p>
          <div>
            {/* TODO: Make down arrow with animations */}
            <BtnGreenScroll
              to="projects"
              spy={true}
              activeClass="nav-bar-link-active"
              smooth={true}
              offset={-navHeight}
            >
              {t("home.btnText").toUpperCase()}
            </BtnGreenScroll>
          </div>
        </GreetingsDiv>
      </FlexContainerRow>
    </FillScreen>
  );
};

export default HomePage;
