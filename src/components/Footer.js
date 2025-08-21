// src/components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-minimal">
      <Container>
        <Row className="align-items-center gy-3">
          <Col xs={12} md={7} className="text-center text-md-start">
            <small>© {year} Sebastián Peñaherrera — Disponible para roles Frontend/Full-Stack.</small>
          </Col>
          <Col xs={12} md={5} className="text-center text-md-end">
            <nav className="footer-links">
              <a href="mailto:sebas172010@gmail.com">Email</a>
              <a href="https://github.com/CspO6" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sebastianpenaherrera/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 
