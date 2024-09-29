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

            
            <br />
            I hold a Master’s in Data Analytics Engineering from Northeastern University.
            <br/>
            My expertise lies in building robust data pipelines, integrating machine learning models, and developing efficient solutions for data-driven problems.
            <br />
            I’ve worked on projects involving real-time data processing, predictive analytics, and applying machine learning algorithms to complex datasets.
            <br />
            I enjoy tackling challenges like optimizing data workflows, improving model performance, and creating user-friendly interfaces for visualizing data insights. I’m passionate about leveraging data and machine learning to deliver impactful solutions that drive innovation.
            <br />
            I have a strong passion for data engineering, and solving complex real-world problems with machine learning.
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
