import React, { useState } from "react";
import Nav from "../Nav";
import About from "../../Pages/About";
import Portfolio from "../../Pages/Portfolio";
import Contact from "../../Pages/Contact";

const Header = () => {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
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
          <h2>James Costello</h2>
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
