import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const resume = require("../../../assets/resume/resume.pdf").default;

  console.log(resume);

  return (
    <div>
      <Card className="skill-card">
        <div>
          <h1>Front End</h1>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item>Javascript</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div>
          <h1>Back End</h1>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Nodejs</ListGroup.Item>
              <ListGroup.Item>Expressjs</ListGroup.Item>
              <ListGroup.Item>SQL</ListGroup.Item>
              <ListGroup.Item>NoSQL</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div>
          <h1>General</h1>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>OOP</ListGroup.Item>
              <ListGroup.Item>API</ListGroup.Item>
              <ListGroup.Item>SPA</ListGroup.Item>
              <ListGroup.Item>PWA</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Card>
      <h2 className="download">
        <a href={resume} download>
          <FaDownload />
        </a>
      </h2>
    </div>
  );
};

export default Home;
