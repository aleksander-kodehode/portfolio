import SkillsIcons from "../components/skills/SkillsIcons";
import { DivSpacer } from "../componentsStyled/navStyles";
import { SectionHeading } from "../componentsStyled/typographyStyled";

const AboutMePage = () => {
  return (
    <div id="about-me">
      <DivSpacer>
        <SectionHeading>Skills</SectionHeading>
        <SkillsIcons />
      </DivSpacer>
    </div>
  );
};

export default AboutMePage;
