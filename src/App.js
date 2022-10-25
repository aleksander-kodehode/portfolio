import { useState } from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import GlobalStyle from "./componentsStyled/globalStyles";
import AboutMePage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsSection";
import { themeContext } from "./context/themeContext";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <themeContext.Provider value={{ isToggled, setIsToggled }}>
      <ThemeProvider theme={isToggled ? lightTheme : darkTheme}>
        <GlobalStyle />
        <NavBar />
        <HomePage />
        <AboutMePage />
        <ProjectsPage />
        <ContactPage />
      </ThemeProvider>
    </themeContext.Provider>
  );
};

export default App;
