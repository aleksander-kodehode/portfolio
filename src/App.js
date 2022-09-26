import theme from "./theme";
import NavBar from "./components/NavBar";
import AboutMePage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsSection";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <HomePage />
      <AboutMePage />
      <ProjectsPage />
      <ContactPage />
    </ThemeProvider>
  );
};

export default App;
