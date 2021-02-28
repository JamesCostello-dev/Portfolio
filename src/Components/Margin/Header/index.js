import React, { useState } from "react";
import Nav from "../Nav";
import About from "../../Pages/About";
import Projects from "../../Pages/Projects";
import Contact from "../../Pages/Contact";

const Header = () => {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      <div>
        <header>
          <h1>James Costello</h1>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
};

export default Header;
