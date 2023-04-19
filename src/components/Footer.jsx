import React from "react";
import "../componentsCss/Footer.css";

const Footer = () => {
  return (
    <footer className="seccion-oscura d-flex flex-column aling-item-center justify-content-center">
      <i className="icono-contacto bi bi-telephone-inbound d-flex flex-wrap aling-item-center justify-content-center"></i>
      <p className="footer-texto text-center">
        Aprendo y creo todos los días.Creemos un proyecyo juntos
      </p>
      <div className="iconos-redes-sociales d-flex flex-wrap aling-item-center justify-content-center">
        <a
          href="https://github.com/IsaacManzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/isaac-esteban-manzo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="mailto:isaacemanzo51@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor d-flex flex-wrap aling-item-center justify-content-center">
        Creado por Isaac Manzo (2022) &#169;
      </div>
    </footer>
  );
};

export default Footer;
