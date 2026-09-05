import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { themeContext } from "@/context/ThemeContext";

function MainLayout({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} dark:bg-gray-950 dark:text-white w-full min-h-screen flex flex-col gap-5`}
      >
        <header className="fixed top-0 left-0 right-0 z-99 h-[15vh]">
          <NavBar />
        </header>
        <main className="flex-grow mt-[16vh] mb-2">{children}</main>
        <footer className="w-full h-[10vh]">
          <Footer />
        </footer>
      </div>
    </themeContext.Provider>
  );
}
export default MainLayout;
