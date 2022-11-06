import styled from "styled-components";
import { TEXT_AND_CONTENT } from "../../pages/text/textContent";
import { navHeight } from "../navStyles";

export const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  min-height: inherit;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
export const FillScreen = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: calc(100vh - ${navHeight}px);
  //TODO: Remove this or keep?
  /*   background: url(${TEXT_AND_CONTENT.WELCOME_PAGE.IMAGES[0]}) no-repeat,
    url(${TEXT_AND_CONTENT.WELCOME_PAGE.IMAGES[1]}) no-repeat bottom right; */
`;
export const GreetingsDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
`;
export const ProfilePic = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  pointer-events: none;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  &::selection {
    color: transparent;
  }
`;
//TYPOGRAPHY
export const PurpleText = styled.span`
  color: ${(props) => props.theme.purple};
`;
export const PreHeading = styled.h4``;
export const WelcomeHeading = styled.h1`
  margin-top: -20px;
  margin-bottom: -15px;
`;
