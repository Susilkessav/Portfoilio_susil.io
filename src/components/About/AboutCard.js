import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Susilkessav </span>
            from <span className="purple"> India.</span>
            <br />
            I hold a Master’s in Data Analytics Engineering from Northeastern University.
            <br />
            I have a strong passion for data engineering, robotics, and solving complex real-world problems with machine learning.
            <br />
            <br />
            Besides coding, here are a few activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Experiencing Different Cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
