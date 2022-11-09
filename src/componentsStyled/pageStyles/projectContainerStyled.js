import styled from "styled-components";
import { BtnGreenScroll } from "../buttonsStyles";
import { device } from "../mediaQueriesBreakPoints";
import { FlexContainerRow } from "./homePageStyles";

export const ProjectsWrapper = styled(FlexContainerRow)`
  flex-wrap: wrap;
  width: 85%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  @media ${device.tabletS} {
    flex-direction: column;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  min-height: 570px;
  max-height: 600px;
  background: ${(props) => props.theme.secondaryBackground};
  margin-right: 2rem;
  align-items: center;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: rgba(127, 90, 240, 0.4) 0px 5px, rgba(127, 90, 240, 0.3) 0px 10px,
    rgba(127, 90, 240, 0.2) 0px 15px, rgba(127, 90, 240, 0.1) 0px 20px,
    rgba(127, 90, 240, 0.05) 0px 25px;
  @media ${device.tabletS} {
    max-width: 90%;
    min-width: 250px;
  }
  @media ${device.tablet} {
    max-width: 90%;
    min-width: 250px;
  }
`;
export const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
export const ProjectImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  height: auto;
  pointer-events: none;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  /* min-height: 350px;
  width: 100%; */
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 0 0 0;
`;
export const ProjectHeading = styled.h3`
  text-align: center;
`;
export const ProjectParagraph = styled.p`
  margin: auto 0;
  min-height: fit-content;
  font-size: 0.95rem;
  padding: 5px 0;
`;
export const BtnGreen = styled(BtnGreenScroll)`
  text-decoration: none;
  margin-right: 1.5rem;
  font-size: 1rem;
`;
