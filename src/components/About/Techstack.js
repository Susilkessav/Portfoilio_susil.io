import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "React.js")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Solidity")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiSolidity />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "MongoDB")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Git")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Firebase")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Redis")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "PostgreSQL")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Python")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;

