import React, { useState } from "react";
import Nav from "../Nav";
import About from "../../Pages/About";
import Projects from "../../Pages/Projects";
import Contact from "../../Pages/Contact";
import Resume from "../../Pages/Resume";
import Footer from "../../Margin/Footer";

const Header = () => {
  const [currentPage, handlePageChange] = useState("About/");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="main-container">
      <div>
        <header>
          <h2>James Costello</h2>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Header;
