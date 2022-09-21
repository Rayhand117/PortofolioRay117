import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experiences from "./pages/experiences/Experiences";
import Skills from "./pages/skills/Skills";
import Interests from "./pages/interests/Interests";
import Awards from "./pages/awards/Awards";
import Contact from "./pages/contacts/Contacts";
import './App.css';

function App() {
  return (
    <div className="Container">
      <Navbar className="Navbar"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
