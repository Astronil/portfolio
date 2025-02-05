import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Milestones from "./pages/Milestones";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/milestones" element={<Milestones />} />
        </Routes>
      </main>
      <Footer />
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
