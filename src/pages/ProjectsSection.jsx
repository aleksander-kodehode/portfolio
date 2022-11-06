import ProjectContainer from "../components/ProjectContainer";
import WaveBg from "../components/WaveBg";
import { SectionHeading } from "../componentsStyled/typographyStyled";
import { TEXT_AND_CONTENT } from "./text/textContent";
const text = TEXT_AND_CONTENT.PROJECTS_PAGE;
const ProjectsPage = () => {
  return (
    <>
      <WaveBg />
      <div id="projects">
        <>
          <SectionHeading>{text.HEADING_PAGE}</SectionHeading>
          <ProjectContainer />
        </>
      </div>
    </>
  );
};

export default ProjectsPage;
