import React, { useState } from "react";
import Nav from "../Nav";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Projects from "../../Pages/Projects";
import Contact from "../../Pages/Contact";

const Header = () => {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
};

export default Header;
