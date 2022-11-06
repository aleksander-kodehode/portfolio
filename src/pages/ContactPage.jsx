import WaveBgAlt from "../components/WaveBgAlt";
import { DivSpacer } from "../componentsStyled/navStyles";
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
  return (
    <>
      <WaveBgAlt />
      <MainWrapperAlt id="contact">
        <ContactSpacer>
          <SectionHeading>Contact Me</SectionHeading>
          <ContactContainer>
            <p>Feel free to contact me for any question you may have</p>
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
