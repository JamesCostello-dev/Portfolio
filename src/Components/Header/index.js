import React from "react";

const Header = () => {
  return (
    <header>
      <h1>James Costello</h1>
      <nav>
        <ul>
          <li>
            <a href="about">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="project">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
