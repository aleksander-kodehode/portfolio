import { BtnGreenScroll } from "../componentsStyled/buttonsStyled";
import {
  FillScreen,
  FlexContainerRow,
  GreetingsDiv,
} from "../componentsStyled/homePageStyles";

const HomePage = () => {
  return (
    <FillScreen id="home">
      <FlexContainerRow>
        <GreetingsDiv>
          <h4>
            <span>-</span>Hello
          </h4>
          <h1>I'm Aleksander Grubstad Hoff</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            deserunt maiores, explicabo necessitatibus similique dolorem
            corrupti pariatur quaerat, cupiditate perspiciatis aperiam nam
            aspernatur iste ratione, id autem totam qui voluptates?
          </p>
          <div>
            <BtnGreenScroll
              to="projects"
              spy={true}
              activeClass="nav-bar-link-active"
              smooth={true}
              offset={-100}
            >
              MY PROJECTS
            </BtnGreenScroll>
          </div>
        </GreetingsDiv>
        <div>
          <img src="#" alt="Portrait"></img>
        </div>
      </FlexContainerRow>
    </FillScreen>
  );
};

export default HomePage;
