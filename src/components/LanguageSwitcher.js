import { useTranslation } from "react-i18next";
import {
  LangSelectContainer,
  ReactFlags,
} from "../componentsStyled/LanguageSwitcherStyles";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(
    i18n.language === "en" ? "GB" : "NO"
  );
  return (
    <LangSelectContainer>
      <ReactFlags
        selected={selected}
        onSelect={(code) => {
          setSelected(code);
          code === "GB" ? i18n.changeLanguage("en") : i18n.changeLanguage("nb");
        }}
        countries={["GB", "NO"]}
        showSelectedLabel={false}
        showOptionLabel={true}
        customLabels={{ GB: "English", NO: "Norsk" }}
        selectedSize={20}
        optionsSize={14}
        fullWidth={false}
      />
    </LangSelectContainer>
  );
};
export default LanguageSwitcher;
