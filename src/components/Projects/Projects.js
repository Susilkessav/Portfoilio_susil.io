import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Formula 1 Race Prediction"
              description="Developed a data processing pipeline using PySpark to clean, transform, and enhance Formula 1 race data for predictive modeling. I applied advanced machine learning algorithms to predict driver finishing positions, focusing on the top 20. The model accounted for variations in yearly driver counts, providing accurate insights for race outcome prediction."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Mental Health Tracking System"
              description="Created a mental health tracking system integrating wearable technology to monitor physiological indicators such as heart rate variability, sleep quality, and activity levels. Leveraging MySQL, NoSQL, and Python, I ensured real-time data capture and analysis. Insights were displayed through an interactive Tableau dashboard, helping users actively manage their mental health."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Loan Prediction Model"
              description="Designed and implemented a loan eligibility prediction model using Python and ensemble learning techniques. The model improved predictive accuracy by 30%, and its deployment in a production environment facilitated real-time loan assessments. This reduced processing times by 50%, offering significant improvements in financial service efficiency."             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Plant Dieases Detection"
              description="At EasyCrop Tech, I developed an AI-based system to classify plant species and detect diseases using neural networks. I orchestrated the collection of over 10,000 plant images, trained machine learning models, and deployed the solution on AWS. The project achieved a 95% accuracy in identifying plant species and detecting diseases, streamlining agricultural diagnostics and contributing to improved crop management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Peer-to-Peer Energy Trading Using Blockchain"
              description="Developed a blockchain-based prototype for peer-to-peer energy trading within a microgrid. Using smart contracts and a custom interface, the system allowed users to trade electricity directly, bypassing intermediaries. The project contributed to sustainable and affordable energy solutions, with rigorous testing validating its performance and scalability in real-world conditions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
