import React from "react";
import "../componentsCss/Articles.css";

const Articles = () => {
  return (
    <section className="articulos justify-content-start">
      <h2 className="seccion-titulo texto-negro">Artículos</h2>
      <h3 className="seccion-descripcion">
        Estos son artículos escritos puramente en GitHub{" "}
        <i className="bi bi-github"></i>{" "}
      </h3>
      <div className="card">
        <div className="card-header">
          <b>Más recientes</b>
        </div>
        <ul className="list-group list-group-flush">
          <a
            href="https://github.com/IsaacManzo/Estudiando/blob/master/initeligenciaArtificial.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="list-group-item">Inteligencia artificial</li>
          </a>
          <a
            href="https://github.com/IsaacManzo/Estudiando/blob/master/bootstrap.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="list-group-item">
              Bootstrap y sus fundamentos principales
            </li>
          </a>
          <a
            href="https://github.com/IsaacManzo/Estudiando/blob/master/redux.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="list-group-item">
              Redux, en que consiste y como configurarlo
            </li>
          </a>
          <a
            href="https://github.com/IsaacManzo/Estudiando/blob/master/react.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="list-group-item">Corto resumen personal sobre React</li>
          </a>
        </ul>
      </div>
      <a
        href="https://github.com/IsaacManzo/Estudiando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="btn btn-light">
          <b>Ver todos mis apuntes</b>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>
    </section>
  );
};

export default Articles;
