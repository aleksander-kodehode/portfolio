import { useTranslation } from "react-i18next";
import {
  LangSelectContainer,
  Selector,
} from "../componentsStyled/LanguageSwitcherStyles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <LangSelectContainer>
      <Selector
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="nb">Norsk</option>
      </Selector>
    </LangSelectContainer>
  );
};
export default LanguageSwitcher;
