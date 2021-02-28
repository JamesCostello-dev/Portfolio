import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaRocket } from "react-icons/fa";

const Portfolio = () => {
  const spaImage = require("../../../img/spa.png").default;
  const pwaImage = require("../../../img/pwa.png").default;
  const foodImage = require("../../../img/food.png").default;
  const scheduleImage = require("../../../img/schedule.png").default;
  const gitImage = require("../../../img/git.png").default;
  const runImage = require("../../../img/run.png").default;

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="card-container">
        <div className="card-div">
          <Card>
            <Card.Img variant="left" src={spaImage} />
            <Card.Body className="port-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              facilis deleniti tempora nostrum vero vel aspernatur consequuntur
              provident. Voluptate distinctio perferendis consequuntur itaque
              ad. Dolorum excepturi esse voluptatem doloremque quaerat.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/supreme-octo-telegram"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://jamescostello-dev.github.io/supreme-octo-telegram/"
                target="blank"
              >
                <li>
                  <FaRocket />
                </li>
              </a>
            </ul>
          </Card>
        </div>
        <div className="card-div">
          <Card>
            <Card.Img variant="left" src={pwaImage} />
            <Card.Body className="port-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              facilis deleniti tempora nostrum vero vel aspernatur consequuntur
              provident. Voluptate distinctio perferendis consequuntur itaque
              ad. Dolorum excepturi esse voluptatem doloremque quaerat.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/curly-octo-fortnight"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a href="https://pure-mesa-60741.herokuapp.com/" target="blank">
                <li>
                  <FaRocket />
                </li>
              </a>
            </ul>
          </Card>
        </div>
        <div className="card-div">
          <Card>
            <Card.Img variant="left" src={foodImage} />
            <Card.Body className="port-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              facilis deleniti tempora nostrum vero vel aspernatur consequuntur
              provident. Voluptate distinctio perferendis consequuntur itaque
              ad. Dolorum excepturi esse voluptatem doloremque quaerat.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/jubilant-broccoli"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://jamescostello-dev.github.io/jubilant-broccoli/"
                target="blank"
              >
                <li>
                  <FaRocket />
                </li>
              </a>
            </ul>
          </Card>
        </div>
        <div className="card-div">
          <Card>
            <Card.Img variant="left" src={gitImage} />
            <Card.Body className="port-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              facilis deleniti tempora nostrum vero vel aspernatur consequuntur
              provident. Voluptate distinctio perferendis consequuntur itaque
              ad. Dolorum excepturi esse voluptatem doloremque quaerat.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/git-it-done"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://jamescostello-dev.github.io/git-it-done/"
                target="blank"
              >
                <li>
                  <FaRocket />
                </li>
              </a>
            </ul>
          </Card>
        </div>
        <div className="card-div">
          <Card>
            <Card.Img variant="left" src={scheduleImage} />
            <Card.Body className="port-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              facilis deleniti tempora nostrum vero vel aspernatur consequuntur
              provident. Voluptate distinctio perferendis consequuntur itaque
              ad. Dolorum excepturi esse voluptatem doloremque quaerat.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/work-day-scheduler"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://jamescostello-dev.github.io/work-day-scheduler/"
                target="blank"
              >
                <li>
                  <FaRocket />
                </li>
              </a>
            </ul>
          </Card>
        </div>
        <div className="card-div">
          <Card>
            <Card.Img variant="left" src={runImage} />
            <Card.Body className="port-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              facilis deleniti tempora nostrum vero vel aspernatur consequuntur
              provident. Voluptate distinctio perferendis consequuntur itaque
              ad. Dolorum excepturi esse voluptatem doloremque quaerat.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/RunBuddy.github.io"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://jamescostello-dev.github.io/RunBuddy.github.io/"
                target="blank"
              >
                <li>
                  <FaRocket />
                </li>
              </a>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
