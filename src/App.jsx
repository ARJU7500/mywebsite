import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/aboutUS/About";
import Education from "./components/education/Education";
import Skill from "./components/skill/Skill";
import Project from "./components/projects/Project";
import Internship from "./components/internship/Internship";
import Contact from "./components/contactus/Contact";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Education />
      <Skill />
      <Project />
      <Internship />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
