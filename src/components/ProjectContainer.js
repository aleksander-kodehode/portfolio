import {
  ButtonWrapper,
  Projects,
  ProjectsWrapper,
  BtnGreen,
  ProjectHeading,
  ProjectImage,
  ProjectParagraph,
  ProjectImageContainer,
} from "../componentsStyled/pageStyles/projectContainerStyled";
import { TEXT_AND_CONTENT } from "../pages/text/textContent";

const ProjectContainer = () => {
  const PROJECTS = TEXT_AND_CONTENT.PROJECTS_PAGE.PROJECT;
  //TODO: Implement cards that flip? (https://github.com/AaronCCWong/react-card-flip)
  return (
    <ProjectsWrapper>
      {PROJECTS.map((proj, idx) => {
        return (
          <Projects className="projects-container" key={idx}>
            <ProjectHeading>{proj.HEADING}</ProjectHeading>
            <ProjectImageContainer>
              <ProjectImage
                alt="Preview screenshot of project"
                src={proj.SCREENSHOT}
              />
            </ProjectImageContainer>
            <ProjectParagraph>{proj.DESCRIPTION}</ProjectParagraph>
            <ButtonWrapper>
              <BtnGreen
                as="a"
                target="_blank"
                rel="noreferrer"
                href={proj.URL_REPOSITORY}
              >
                GITHUB
              </BtnGreen>
              <BtnGreen
                as="a"
                target="_blank"
                rel="noreferrer"
                href={proj.URL_LIVE}
              >
                LIVE
              </BtnGreen>
            </ButtonWrapper>
          </Projects>
        );
      })}
    </ProjectsWrapper>
  );
};

export default ProjectContainer;
