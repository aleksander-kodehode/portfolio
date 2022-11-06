import WaveBgAlt from "../components/WaveBgAlt";
import { DivSpacer } from "../componentsStyled/navStyles";
import { ContactContainer } from "../componentsStyled/pageStyles/contactPageStyles";
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
        <DivSpacer>
          <SectionHeading>Contact Me</SectionHeading>
          <ContactContainer>
            <p>Feel free to contact me for any question you may have</p>
            <Hyperlink href="mailto:aleksander@grubstad.no">
              aleksander@grubstad.no
            </Hyperlink>
          </ContactContainer>
        </DivSpacer>
      </MainWrapperAlt>
    </>
  );
};

export default ContactPage;
