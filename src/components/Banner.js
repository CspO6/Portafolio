import React from 'react';
import { useEffect, useState } from "react"
import { Row, Container, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/foto.png'
import 'animate.css';
import { HashLink } from 'react-router-hash-link'; 

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrollador Web", "Desarrollador Frontend", "Desarrollador Backend"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
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

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if (!isDeleting && updateText === fullText){
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi portafolio</span>
                        <h1>{'Hola! Soy Sebastian '}<span className="wrap"> {text}</span></h1>
                        <p> Soy un ingeniero de software graduado de la ESPOCH, apasionado por el desarrollo web y la creación de soluciones tecnológicas eficientes. A lo largo de mi carrera, he complementado mis estudios con diversos cursos especializados, fortaleciendo mis habilidades en React, Laravel, Redux, Tailwind CSS, y más.

                            Tengo experiencia en el desarrollo de aplicaciones web responsivas y escalables, priorizando el rendimiento y la experiencia del usuario. Además, me especializo en la gestión de autenticación, manejo de sesiones y optimización del backend.

                            Siempre estoy en busca de nuevos retos y oportunidades para seguir creciendo como desarrollador. 🚀 </p>
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
    )

}
