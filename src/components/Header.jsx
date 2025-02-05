import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrollPosition > 50 ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-black font-bold text-lg">
          Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-black hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-black hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/milestones" className="text-black hover:text-blue-500">
              Milestones
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
