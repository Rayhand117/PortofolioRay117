import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
// https://www.cssportal.com/css-text-gradient-generator/
  return (
    <nav>
        <NavLink end to="/"><p>HOME</p></NavLink>
        <NavLink to="/about"><p>ABOUT</p></NavLink>
        <NavLink to="/experiences"><p>EXPERIENCE</p></NavLink>
        <NavLink to="/skills"><p>SKILLS</p></NavLink>
        <NavLink to="/interests"><p>INTEREST</p></NavLink>
        <NavLink to="/awards"><p>AWARDS</p></NavLink>
        <NavLink to="/contact"><p>CONTACT</p></NavLink>
    </nav>
  );
}

export default Navbar;
