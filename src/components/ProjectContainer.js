import {
  ButtonWrapper,
  Projects,
  ProjectsWrapper,
  BtnGreen,
  ProjectHeading,
  ProjectImage,
} from "../componentsStyled/ProjectContainerStyled";
import { TEXT_AND_CONTENT } from "../pages/text/textContent";

const ProjectContainer = () => {
  const PROJECTS = TEXT_AND_CONTENT.PROJECTS_PAGE.PROJECT;

  return (
    <ProjectsWrapper>
      {PROJECTS.map((proj, idx) => {
        return (
          <Projects key={idx}>
            <ProjectHeading>{proj.HEADING}</ProjectHeading>
            <div>
              <ProjectImage
                alt="Preview screenshot of project"
                src={proj.SCREENSHOT}
              />
            </div>
            <p>{proj.DESCRIPTION}</p>
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
