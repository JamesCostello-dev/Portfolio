import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/JamesCostello-dev" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/james-costello-04725088"
            target="blank"
          >
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://stackoverflow.com/users/14091186/jco" target="blank">
            <li>
              <FaStackOverflow />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
