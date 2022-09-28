import styled from "styled-components";
import { TEXT_AND_CONTENT } from "../pages/text/textContent";
import { navHeight } from "./navStyles";

export const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 0 auto;
`;
export const FillScreen = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: calc(100vh - ${navHeight}px);
  background: url(${TEXT_AND_CONTENT.WELCOME_PAGE.IMAGES[0]}) no-repeat,
    url(${TEXT_AND_CONTENT.WELCOME_PAGE.IMAGES[1]}) no-repeat bottom right;
`;
export const GreetingsDiv = styled.div`
  width: 60%;
`;
