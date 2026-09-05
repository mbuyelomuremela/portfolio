import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
import { useState, useContext } from "react";
import { themeContext } from "@/context/ThemeContext";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(themeContext);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function toggleTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <>
      <nav className="flex justify-between items-center">
        <a href="#">
          Mbuyelo <span>Muremela</span>
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/education"}>Education</Link>
          </li>
          <li>
            <Link to={"/experience"}>Experience</Link>
          </li>
          <li>
            <Link to={"#"} onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </Link>
          </li>
        </ul>
        <div className="block md:hidden">
          <FaBars onClick={toggleMobileMenu} />
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-1 items-center md:hidden">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/education"}>Education</Link>
          </li>
          <li>
            <Link to={"/experience"}>Experience</Link>
          </li>
          <li>
            <Link to={"#"} onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
export default NavBar;
