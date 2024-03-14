import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/aboutUS/About";
import "./components/aboutUS/About.css";
import Education from "./components/education/Education";
import "./components/education/Education.css";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
