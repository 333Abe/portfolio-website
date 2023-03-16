import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cv from "./components/Cv";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/projects" element={<ProjectsList />} />
        {/* <Route path="/projects:project_id" element={<ProjectInfo />} /> */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
