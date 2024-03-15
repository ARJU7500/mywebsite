import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/aboutUS/About";
import Education from "./components/education/Education";
import Skill from "./components/skill/Skill";
import Project from "./components/projects/Project";
import Internship from "./components/internship/Internship";
import Contact from "./components/contactus/Contact";
import Nav from "./components/nav/Nav";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<About />} />
      <Route path="education" element={<Education />} />
      <Route path="skills" element={<Skill />} />
      <Route path="projects" element={<Project />} />
      <Route path="internship" element={<Internship />} />
      <Route path="contact" element={<Contact />} />
      <Route path="nav" element={<Nav />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
