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
  max-height: 600px;
  background: ${(props) => props.theme.projectBg};

  margin-right: 2rem;
  align-items: center;
  margin-bottom: 3rem;
  border-radius: 5px;
  box-shadow: 2.4px 2.4px 4.3px rgba(0, 0, 0, 0.019),
    6.2px 6.2px 10.7px rgba(0, 0, 0, 0.027),
    12.6px 12.6px 21.5px rgba(0, 0, 0, 0.033),
    25.9px 25.9px 43.1px rgba(0, 0, 0, 0.041),
    71px 71px 110px rgba(0, 0, 0, 0.06);
  /* box-shadow: rgba(127, 90, 240, 0.4) 0px 5px, rgba(127, 90, 240, 0.3) 0px 10px,
    rgba(127, 90, 240, 0.2) 0px 15px, rgba(127, 90, 240, 0.1) 0px 20px,
    rgba(127, 90, 240, 0.05) 0px 25px; */
  @media ${device.tabletS} {
    max-width: 90%;
    min-width: 250px;
  }
  @media ${device.tablet} {
    max-width: 90%;
    min-width: 250px;
  }
`;
export const TypeTagContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;
export const ProjectImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  pointer-events: none;
  height: auto;
  min-height: 250px;
  width: 100%;
  &::selection {
    background: transparent;
  }
`;
export const BottomWrapper = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  width: 100%;
`;
export const TextAndButtonWrapper = styled.div`
  min-height: 230px;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 0 0 0;
  margin-bottom: 15px;
`;
export const ProjectHeading = styled.h3`
  color: ${(props) => props.theme.heading};
  margin: 0;
`;
export const TypeHeading = styled.h4`
  color: ${(props) => props.theme.purple};
  font-size: 0.8rem;
`;
export const Tag = styled.span`
  padding: 0.15rem;
  margin-right: 5px;
  border-radius: 3px;
  letter-spacing: 0.7px;
  font-size: 0.675rem;
  color: ${(props) => props.theme.black};
  font-weight: 700;
  &[datatype="CSS"] {
    background-color: rgba(46, 164, 215);
  }
  &[datatype="HTML"] {
    background-color: rgba(237, 128, 57);
  }
  &[datatype="JS"] {
    background-color: rgba(237, 213, 29);
  }
  &[datatype="TS"] {
    background-color: rgba(47, 114, 189);
  }
  &[datatype="REACTJS"] {
    background-color: rgba(117, 223, 244);
  }
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
