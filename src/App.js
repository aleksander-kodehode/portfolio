import NavBar from "./components/NavBar";
import AboutMePage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsSection";

const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutMePage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
};

export default App;
