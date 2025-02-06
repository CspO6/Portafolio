import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/Logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/CspO6" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.instagram.com/_cspo_?igsh=MXJrMTkxeXo0Y3UzYw==" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/sebastian-pe%C3%B1aherrera-b7103a2b4/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="" />
                </a>
            </div>
            <p>Copyright 2025. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}