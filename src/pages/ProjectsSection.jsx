import ProjectContainer from "../components/ProjectContainer";
import { SectionHeading } from "../componentsStyled/typographyStyled";

const ProjectsPage = () => {
  return (
    <div id="projects">
      <>
        <SectionHeading>Projects</SectionHeading>
        <ProjectContainer />
      </>
    </div>
  );
};

export default ProjectsPage;
