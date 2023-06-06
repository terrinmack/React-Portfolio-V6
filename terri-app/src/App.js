import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      {/* outside of routes tag will be rendered on all pages */}
      <Navbar />
      {/* within Routes will render separate pages */}
      <Routes>
        <Route path='/React-Portfolio-V6/' element={<Home />} />
        <Route path='/React-Portfolio-V6/about' element={<About />} />
        <Route path='/React-Portfolio-V6/skills' element={<Skills />} />
        <Route path='/React-Portfolio-V6/projects' element={<Projects />} />
        <Route path='/React-Portfolio-V6/contact' element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;