import { useTranslation } from "react-i18next";
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

const ProjectContainer = () => {
  const { t } = useTranslation();
  const PROJECTS = t("projects.project", { returnObjects: true });

  //TODO: Implement cards that flip? (https://github.com/AaronCCWong/react-card-flip)
  return (
    <ProjectsWrapper>
      {PROJECTS.map((proj, idx) => {
        return (
          <Projects className="projects-container" key={idx}>
            <ProjectHeading>{proj.heading}</ProjectHeading>
            <ProjectImageContainer>
              <ProjectImage
                alt="Preview screenshot of project"
                src={process.env.PUBLIC_URL + proj.screenshot}
              />
            </ProjectImageContainer>
            <ProjectParagraph>{proj.desc}</ProjectParagraph>
            {/* TODO: could add tags for what framework/lang was used in this project with a simple forEach on an array with tags, outputting colored boxes based on what lang it is. */}
            <ButtonWrapper>
              <BtnGreen
                as="a"
                target="_blank"
                rel="noreferrer"
                href={proj.repositoryUrl}
              >
                {t("projects.buttons.github").toUpperCase()}
              </BtnGreen>
              <BtnGreen
                as="a"
                target="_blank"
                rel="noreferrer"
                href={proj.liveUrl}
              >
                {t("projects.buttons.demo").toUpperCase()}
              </BtnGreen>
            </ButtonWrapper>
          </Projects>
        );
      })}
    </ProjectsWrapper>
  );
};

export default ProjectContainer;
