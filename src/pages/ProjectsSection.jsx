import { useTranslation } from "react-i18next";
import ProjectContainer from "../components/ProjectContainer";
import WaveBg from "../components/WaveBg";
import { SectionHeading } from "../componentsStyled/typographyStyles";

const ProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <WaveBg />
      <div id="projects">
        <>
          <SectionHeading>{t("projects.heading")}</SectionHeading>
          <ProjectContainer />
        </>
      </div>
    </>
  );
};

export default ProjectsPage;
