// src/components/Projects.tsx
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard, { Project } from "./ProjectCard";
import projImg1 from "../assets/img/postula.png";
import projImg2 from "../assets/img/ministerio.png";
import projImg3 from "../assets/img/bookdrive.png";
import projImg4 from "../assets/img/empleados.png";
import projImg5 from "../assets/img/qa.png";
import projImg6 from "../assets/img/notes.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";


export const Projects = () => {
  const projects = [
    {
      title: "Postúlate (React + Laravel)",
      short:
        "Plataforma para publicar ofertas, gestionar postulantes y reducir tiempos de reclutamiento.",
      context: "Proasetel S.A. ",
      image: projImg1,
      stack: ["React", "Laravel", "MySQL", "JWT", "Tailwind"],
      results: [
        "Reducción ~50% del tiempo de reclutamiento",
        "Flujos de publicación, filtros y visibilidad de ofertas",
        "Descarga de datos y manejo de sesiones",
      ],
      links: { live: "https://postula.net", repo: "https://github.com/CspO6/..." },
    },
    {
      title: "BookMyDrive (Spring Boot + Thymeleaf)",
      short:
        "Sistema para compra de boletos de bus con gestión de rutas y asientos.",
      context: "Proyecto personal ",
      image: projImg3,
      stack: ["React", "Express", "MySQL", "Vercel"],
      results: [
        "Selección de asientos en tiempo real",
        "Checkout básico y confirmación por email",
        "Panel para administración de rutas",
      ],
      links: {
        live: "https://bookmydrive.onrender.com/",
        repo: "https://github.com/CspO6/BookMyDrive",
      },
    },
    {
      title: "AppArchivos (React + Django)",
      short:
        "Aplicación para la organización y acceso de documentación institucional.",
      context: "MAATE",
      image: projImg2,
      stack: ["React", "Node", "PostgreSQL"],
      results: [
        "Permisos por rol y estructura de carpetas",
        "Búsqueda por metadatos",
        "Despliegue en Render",
      ],
      links: {
        live: "https://apparchivos2024.onrender.com",
        repo: "https://github.com/AppArchivos/AppArchivos2024",
      },
    },
    {
      title: "Gestión Empleados & Tiendas (Angular 19 + .NET 8)",
      short:
        "CRUD completo con búsqueda, validaciones reactivas, paginación e interceptores de errores.",
      context: "Proyecto técnico ",
      image: projImg4,
      stack: ["Angular", "ASP.NET Core 8", "SQL Server", "JWT", "Tailwind"],
      results: [
        "Listados con filtros y paginación",
        "Validación con formularios reactivos + SweetAlert2",
        "Arquitectura modular + DTOs",
      ],
      links: {
        repoFront: "https://github.com/CspO6/frontend-app",
        repoBack: "https://github.com/CspO6/api-empleados-tiendas",
      },
    },
    {
      title: "API de reportes PDF (FastAPI + React)",
      short:
        "Servicio para generar PDF de empleados/tiendas consumido desde Angular.",
      context: "Proyecto personal",
      image: projImg5,
      stack: ["FastAPI", "ReportLab", "Python", "Docker"],
      results: [
        "Búsqueda de fragmentos relevantes usando TF-IDF (rápido y ligero, sin necesidad de embeddings).",
        "Integración con GPT-3.5-Turbo, que recibe los fragmentos más relevantes y genera una respuesta clara y breve.",
        "Archivos almacenados de forma local en uploaded_files/ (sin servicios externos).",
        "Procesamiento en memoria (no se mantiene índice persistente; se recarga en cada consulta por simplicidad)."
      ],
      links: { repo: "https://github.com/CspO6/qa-mini-asistente" },
    },
    {
      title: "Notas App (Spring Boot + React)",
      short:
        "Aplicación para crear, editar y archivar notas con filtrado por tags y búsqueda.",
      context: "Proyecto personal",
      image: projImg6,
      stack: ["React", "Node", "Express", "MySQL", "Bootstrap"],
      results: [
        "CRUD completo de notas (título, contenido y tags).",
        "Filtrado por tags y buscador por texto.",
        "Vistas: activas y archivadas; restauración con un clic.",
        "API REST con persistencia en MySQL.",
      ],
      links: {
        repoFront: "https://github.com/CspO6/Frontend-notes",
        repoBack: "https://github.com/CspO6/Backend-notes",
      },
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* Encabezado con "Ver todos" a la derecha */}
                 <div className="d-flex justify-content-between align-items-center mb-2">
                    <h2 className="mb-0">Proyectos destacados</h2>

                    <a
                      href="https://github.com/CspO6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small text-success fw-semibold text-decoration-none"
                      aria-label="Ver todos mis proyectos en GitHub"
                      title="Ver todos mis proyectos en GitHub"
                    >
                      Ver todos <span className="ms-1" aria-hidden>→</span>
                    </a>
                  </div>

                  {/* Grid de tarjetas */}
                  <Row className="g-4">
                    {projects.map((proj, i) => (
                      <Col key={i} xs={12} sm={6} md={4} className="d-flex">
                        <div className="w-100">
                          <ProjectCard p={proj} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};