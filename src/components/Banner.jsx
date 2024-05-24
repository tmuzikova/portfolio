import { Col, Container, Row } from "react-bootstrap";

import headerImg from "../img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webcoded`}
              <span className="wrap">web developer</span>
            </h1>
            <p>
              blaaaaaaaaaaaaablaaaaaaaaaaaaaaaaablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect
            </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
