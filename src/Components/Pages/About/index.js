import React from "react";
import Card from "react-bootstrap/Card";

const About = () => {
  const aboutImage = require("../../../assets/img/about.png").default;

  return (
    <div>
      <h1>About</h1>
      <Card>
        <Card.Img variant="left" src={aboutImage} />
        <Card.Body className="about-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          aspernatur, dolorum quas iste, dolores cumque vitae dolor provident
          odit blanditiis quidem fugiat, cupiditate voluptate repellat ipsam
          saepe tempora hic itaque.
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
