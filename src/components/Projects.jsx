import React from "react";
import { Button } from "bootstrap";
import "../componentsCss/Projects.css";

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="proyectos-recientes seccion-clara d-flex flex-column"
    >
      <h2 className="seccion-titulo texto-negro">Mis proyectos</h2>
      <h3 className="seccion-descripcion">
        Estos son algunos de mis proyectos recientes...
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto text-center proyectos-contenedor">
              <img src="./src/assets/image1.png" alt="Proyecto 1" />
              <div className="overlay">
                <p>
                  <b>Gamer-cado libre</b>
                </p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/IsaacManzo/Gamer-cado-libre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://icons.getbootstrap.com/icons/laptop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto text-center proyectos-contenedor">
              <img src="./src/assets/image2.png" alt="Proyecto 1" />
              <div className="overlay">
                <p>
                  <b>Inmobiliaria Antezana</b>
                </p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/IsaacManzo/Proyecto-profesional"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://icons.getbootstrap.com/icons/laptop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto text-center proyectos-contenedor">
              <img src="./src/assets/image3.png" alt="Proyecto 1" />
              <div className="overlay">
                <p>
                  <b>E-commerce ropa</b>
                </p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/IsaacManzo/Gamer-cado-libre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://icons.getbootstrap.com/icons/laptop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/IsaacManzo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="btn btn-light">
          <b>Ver más proyectos</b>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
        
      </a>
    </section>
  );
};

export default Projects;
