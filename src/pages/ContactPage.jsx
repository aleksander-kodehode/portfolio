import { useTranslation } from "react-i18next";
import WaveBgAlt from "../components/WaveBgAlt";
import {
  ContactContainer,
  ContactSpacer,
} from "../componentsStyled/pageStyles/contactPageStyles";
import { MainWrapperAlt } from "../componentsStyled/pageStyles/mainWrapperStyle";
import {
  Hyperlink,
  SectionHeading,
} from "../componentsStyled/typographyStyled";
const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <WaveBgAlt />
      <MainWrapperAlt id="contact">
        <ContactSpacer>
          <SectionHeading>{t("contact.heading")}</SectionHeading>
          <ContactContainer>
            <p>{t("contact.text")}</p>
            <Hyperlink href="mailto:aleksander@grubstad.no">
              aleksander@grubstad.no
            </Hyperlink>
          </ContactContainer>
        </ContactSpacer>
      </MainWrapperAlt>
    </>
  );
};

export default ContactPage;
