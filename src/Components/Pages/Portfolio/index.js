import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaRocket } from "react-icons/fa";

const Portfolio = () => {
  const aws = require("../../../assets/img/aws.png").default;
  const reduxStore = require("../../../assets/img/redux-store.png").default;
  const bookSearch = require("../../../assets/img/book-search.png").default;
  const budgetTracker = require("../../../assets/img/budget-tracker.png").default;
  const gitItDone = require("../../../assets/img/git-it-done.png").default;
  const workDayScheduler = require("../../../assets/img/work-day-scheduler.png").default;

  return (
    <div>
      <div className="card-container">
        <div className="card-div">
          <h1>Current Project</h1>
          <Card>
            <Card.Img variant="left" src={aws} />
            <Card.Body className="port-body">
              Refactor of a previously built MERN application to deploy using Amazon Web Services.  Replacing the back-end API with cloud resources to handle the storage, database, and computing.
            </Card.Body>
            <ul>
              <a
                href="https://github.com/JamesCostello-dev/cuddly-parakeet"
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
