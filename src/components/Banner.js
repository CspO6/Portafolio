// src/components/Banner.jsx
import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/foto.png";
import "animate.css";
import { motion } from "framer-motion";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Desarrollador Web", "Desarrollador Frontend", "Desarrollador Backend"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50); // más rápido
  const period = 2000;
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };


  const CV_PATH = "/CV_Jaime_Sebastian_Peñaherrera_Obregon-1 (1).pdf";

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);
    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updateText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a mi portafolio</span>
            <motion.p variants={item} className="text-sm font-medium text-emerald-500 mb-2">
              Disponible | Remoto / Ecuador
            </motion.p>

            <h1>
              {"Hola! Soy Sebastian "}
              <span className="wrap"> {text}</span>
            </h1>

            <p>
              Soy un ingeniero de software con 27 años, graduado de la ESPOCH, apasionado por el
              desarrollo web y backend. Tengo experiencia en tecnologías como HTML, CSS y
              JavaScript, además de trabajar con frameworks modernos como React para el frontend y
              Spring Boot y Laravel para el backend. También manejo bases de datos relacionales como
              MySQL, PostgreSQL y SQL Server, lo que me permite desarrollar aplicaciones robustas y
              escalables. Siempre estoy en constante aprendizaje, buscando mejorar mis habilidades y
              aportar soluciones eficientes en cada proyecto. 💻
            </p>

         
            <div className="d-flex align-items-center gap-3 flex-wrap mt-3">
              <a href="#connect" style={{ textDecoration: "none", color: "inherit" }}>
                <button>
                  Contáctame <ArrowRightCircle size={25} />
                </button>
              </a>

              <a
                href={CV_PATH}
                download
                style={{ textDecoration: "none", color: "inherit" }}
                aria-label="Descargar CV en PDF"
              >
                <button>
                  Descargar CV <Download size={22} />
                </button>
              </a>
            </div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
