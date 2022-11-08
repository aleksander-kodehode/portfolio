import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LangSelectContainer = styled.div`
  margin-right: auto;
`;
const LangSwitchBtn = styled.button`
  margin-left: 20px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.purple};
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <LangSelectContainer>
      <LangSwitchBtn
        value={i18n.language}
        onClick={() => {
          i18n.changeLanguage(i18n.language === "nb" ? "en" : "nb");
        }}
      >
        {i18n.language === "nb" ? "English" : "Norsk"}
      </LangSwitchBtn>
      {/* <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="nb">Norsk</option>
      </select> */}
    </LangSelectContainer>
  );
};
export default LanguageSwitcher;
