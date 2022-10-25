import styled from "styled-components";
import { BtnGreenScroll } from "./buttonsStyled";
import { FlexContainerRow } from "./homePageStyles";

export const ProjectsWrapper = styled(FlexContainerRow)`
  flex-wrap: wrap;
  width: 85%;
  max-width: 1400px;
  justify-content: center;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  max-height: 700px;
  background: ${(props) => props.theme.secondaryBackground};
  margin-right: 2rem;
  align-items: center;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: rgba(127, 90, 240, 0.4) 0px 5px, rgba(127, 90, 240, 0.3) 0px 10px,
    rgba(127, 90, 240, 0.2) 0px 15px, rgba(127, 90, 240, 0.1) 0px 20px,
    rgba(127, 90, 240, 0.05) 0px 25px;
  & p {
    min-height: fit-content;
    font-size: 0.95rem;
  }
`;
export const ProjectImage = styled.img`
  max-height: 350px;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ProjectHeading = styled.h3`
  text-align: center;
`;
export const BtnGreen = styled(BtnGreenScroll)`
  text-decoration: none;
  margin-right: 1.5rem;
  font-size: 1rem;
`;
