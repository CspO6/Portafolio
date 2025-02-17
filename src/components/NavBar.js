import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link'; 
import { BrowserRouter } from "react-router-dom"; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <BrowserRouter> {/* Usa BrowserRouter aquí */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav> {/* Elimina la clase ms-auto */}
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Habilidades
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Proyectos
              </Nav.Link>
            </Nav>
            <span className="navbar-text ms-auto"> {/* Alinea el texto a la derecha */}
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
              <HashLink to="#connect"> {/* Usa HashLink aquí */}
                <button className="vvd"><span>Contáctame</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};