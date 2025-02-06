import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/postula.png";
import projImg2 from "../assets/img/ministerio.png";
import projImg3 from "../assets/img/bookdrive.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Postula",
      description: "Aplicación para postulación a empleos para la empresa Proasetel S.A.",
      imgUrl: projImg1,
      url: "https://postula.net"
    },
    {
      title: "AppArchivos",
      description: "Aplicacion desarrollada para el Ministerio del Ambiente",
      imgUrl: projImg2,
      url:"https://apparchivos2024.onrender.com"
    },
    {
      title: "BookMyDrive",
      description: "Aplicacion para venta de boletos de bus",
      imgUrl: projImg3,
      url:"https://bookmydrive.onrender.com/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>He desarrollado múltiples proyectos tanto en el ámbito universitario como en prácticas profesionales y en mi tesis, aplicando mis conocimientos en desarrollo web full stack para crear soluciones funcionales y eficientes. Cada proyecto me ha permitido mejorar mis habilidades en frontend y backend, enfrentando desafíos reales y optimizando el rendimiento, la escalabilidad y la experiencia de usuario.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Si quieres explorar más de mis proyectos y ver mi trabajo en acción, te invito a visitar mi GitHub, donde encontrarás repositorios con diversas soluciones que he desarrollado, aplicando las mejores prácticas en frontend y backend. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Si estás interesado en mi trabajo o quieres colaborar en un proyecto, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y desafíos. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}