import { useTranslation } from "react-i18next";
import styled from "styled-components";
import arrowDown from "../public/arrow-down-circle.svg";
const LangSelectContainer = styled.div`
  margin-right: auto;
  margin-left: 20px;
  position: relative;
  background-color: #e6e6e6;
  width: auto;
  float: left;
  max-width: 100%;
  border-radius: 2px;
`;
export const Selector = styled.select`
  font-size: 1rem;
  font-weight: 200;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
  -webkit-appearance: menulist !important;
  -moz-appearance: menulist !important;
  appearance: menulist !important;
  &:active,
  :focus {
    outline: none;
    box-shadow: none;
  }
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #aaa;
    background-image: url(${arrowDown});
    color: red;
  }
`;
/* const LangSwitchBtn = styled.button`
  margin-left: 20px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.purple};
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
`; */

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <LangSelectContainer>
      {/* <LangSwitchBtn
        value={i18n.language}
        onClick={() => {
          i18n.changeLanguage(i18n.language === "nb" ? "en" : "nb");
        }}
      >
        {i18n.language === "nb" ? "English" : "Norsk"}
      </LangSwitchBtn> */}
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
