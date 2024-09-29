import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "macOS")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Visual Studio Code")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Postman")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Slack")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={(props) => renderTooltip(props, "Vercel")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
