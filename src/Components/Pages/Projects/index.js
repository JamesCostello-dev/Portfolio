import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaRocket } from "react-icons/fa";

const Portfolio = () => {
  const SimpleFileManager = require("../../../assets/img/SimpleFileManager.png");
  const reduxStore = require("../../../assets/img/redux-store.png");
  const bookSearch = require("../../../assets/img/book-search.png");
  const budgetTracker = require("../../../assets/img/budget-tracker.png");
  const gitItDone = require("../../../assets/img/git-it-done.png");
  const workDayScheduler = require("../../../assets/img/work-day-scheduler.png");

  console.log(SimpleFileManager);

  return (
    <div>
      <div className="card-container">
        <div className="card-div">
          <h1>Current Project</h1>
          <Card>
            <Card.Img variant="left" src={SimpleFileManager}/>
            <Card.Body className="port-body">
              SimpleFileManager is a collection of python scripts to increase workflow efficiency.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/SimpleFileManager"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
            </ul>
          </Card>
        </div>
        <div className="card-div">
          <h1>Redux Store</h1>
          <Card>
            <Card.Img variant="left" src={reduxStore} />
            <Card.Body className="port-body">
              Redux store is an E-Commerce MERN application using redux for state management.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/friendly-bassoon"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a href="https://murmuring-lake-12171.herokuapp.com/" target="blank">
                <li>
                  <FaRocket />
                </li>
              </a>
            </ul>
          </Card>
        </div>
        <div className="card-div">
          <h1>Google Book Search</h1>
          <Card>
            <Card.Img variant="left" src={bookSearch} />
            <Card.Body className="port-body">
              Google Book Search is MERN application using Google Books API built with GraphQL and Apollo Server.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/expert-pancake"
                target="blank"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://blooming-refuge-93954.herokuapp.com/"
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
          <h1>Budget Tracker</h1>
          <Card>
            <Card.Img variant="left" src={budgetTracker} />
            <Card.Body className="port-body">
              Budget tracker is a progressive web application with offline access and functionality.
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
              <a
                href="https://pure-mesa-60741.herokuapp.com/"
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
          <h1>Work Day Scheduler</h1>
          <Card>
            <Card.Img variant="left" src={workDayScheduler} />
            <Card.Body className="port-body">
              Calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.
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
          <h1>Git-it-done</h1>
          <Card>
            <Card.Img variant="left" src={gitItDone} />
            <Card.Body className="port-body">
              Web app that will search Github for open source projects with open issues and pull requests.
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
      </div>
    </div>
  );
};

export default Portfolio;
