import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
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
      <nav className="flex justify-between items-center py-4 px-6 max-w-[1200px] mx-auto h-full">
        <a href="#" className="text-xl md:text-lg font-bold">
          Mbuyelo <span className="text-blue-600">Muremela</span>
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center dark:text-white/50">
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
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-slate-900" />
              )}
            </Link>
          </li>
        </ul>
        <div className="block md:hidden text-lg" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-10 items-center md:hidden bg-gray-200 dark:bg-gray-950 dark:text-white/50 pb-2">
          <li>
            <Link to={"/"} onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/education"} onClick={toggleMobileMenu}>
              Education
            </Link>
          </li>
          <li>
            <Link to={"/experience"} onClick={toggleMobileMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to={"#"} onClick={toggleTheme}>
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" onClick={toggleMobileMenu} />
              ) : (
                <FaMoon className="text-slate-900" onClick={toggleMobileMenu} />
              )}
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
export default NavBar;
