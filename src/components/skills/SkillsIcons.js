import { TEXT_AND_CONTENT } from "../../pages/text/textContent";
import { Icons, IconWrapper } from "./skillsIconsStyles";

const SkillsIcons = () => {
  const skill = TEXT_AND_CONTENT.ABOUT_PAGE.SKILLS.ICONS;

  return (
    <IconWrapper>
      {skill.map((skills, idx) => {
        return <Icons key={idx} icon={"simple-icons:" + skills} alt={skills} />;
      })}
    </IconWrapper>
  );
};

export default SkillsIcons;
