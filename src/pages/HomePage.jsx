import { BtnGreenScroll } from "../componentsStyled/buttonsStyled";
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
  return (
    <FillScreen id="home">
      <FlexContainerRow>
        <GreetingsDiv>
          <ImgContainer>
            <ProfilePic src={content.IMAGES[2]} alt="Portrait"></ProfilePic>
          </ImgContainer>
          <div>
            <PreHeading>
              <PurpleText>- </PurpleText>Hello
            </PreHeading>
            <WelcomeHeading>
              I'm <PurpleText>Aleksander</PurpleText> Grubstad Hoff
            </WelcomeHeading>
          </div>
          <p>Frontend developer | React</p>
          <div>
            {/* TODO: Make down arrow with animations */}
            <BtnGreenScroll
              to="projects"
              spy={true}
              activeClass="nav-bar-link-active"
              smooth={true}
              offset={-navHeight}
            >
              MY PROJECTS
            </BtnGreenScroll>
          </div>
        </GreetingsDiv>
      </FlexContainerRow>
    </FillScreen>
  );
};

export default HomePage;
