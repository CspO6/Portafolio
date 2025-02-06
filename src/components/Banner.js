import React from 'react';
import { useEffect, useState } from "react"
import { Row, Container, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/foto.png'
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrollador Web", "Desarrollador Frontend", "Desarrollador Backend"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 50); // Reducido para mayor velocidad
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick(); 
        }, delta);
    
        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2); // Acelerar la eliminación
        }

        if (!isDeleting && updateText === fullText) {
            setDelta(period); // Pausa después de escribir completamente
            setIsDeleting(true);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100); // Intervalo inicial más rápido al comenzar de nuevo
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi portafolio</span>
                        <h1>{'Hola! Soy Sebastian '}<span className="wrap"> {text}</span></h1>
                        <p> Soy un ingeniero de software con 27 años, graduado de la ESPOCH, apasionado por el desarrollo web y backend. Tengo experiencia en tecnologías como HTML, CSS y JavaScript, además de trabajar con frameworks modernos como React para el frontend y Spring Boot y Laravel para el backend.
                            También manejo bases de datos relacionales como MySQL, PostgreSQL y SQL Server, lo que me permite desarrollar aplicaciones robustas y escalables. Siempre estoy en constante aprendizaje, buscando mejorar mis habilidades y aportar soluciones eficientes en cada proyecto. 💻 </p>
                            <a href="#connect" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <button>
                                Contactame <ArrowRightCircle size={25} />
                            </button>
                            </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>      
    );
};
