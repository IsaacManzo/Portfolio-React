import React from "react";
import "../componentsCss/Experience.css";

const Experience = () => {
  return (
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          <div className="columna col-12 col-md-4">
            <i className="bi bi-pc-display"></i>
            <p className="experiencia-titulo">Desarrollo web</p>
            <p>
              A lo largo de mi carrera como programador aprendí las tecnologías
              necesarias para el armado de una pagina web, por suerte tengo la
              facilidad para este trabajo ya que nací con una computadora en las
              manos. Cuando debo céntrarme a aprender algo nuevo no requiere
              mucho esfuerzo, además que me gusta construir proyectos elegantes
              y con una técnica precisa (nada dentro del código queda sin
              revisar y testear).
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-dark">JavaScript</span>
              <span className="badge text-bg-dark">React</span>
              <span className="badge text-bg-dark">Express</span>
              <span className="badge text-bg-dark">Node</span>
              <span className="badge text-bg-dark">Postgresql</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <i className="bi bi-journals"></i>
            <p className="experiencia-titulo">Articulos</p>
            <p>
              A la hora de estudiar creo mis propios apuntes, al cual recurro en
              momentos de olvido, solía hacerlo en hoja y papel pero ahora
              cuelgo toda esta información en mi repositorio personal, allí se
              encuentra gran parte de mi conocimiento y muchas otras cosas que
              siguen anotadas en varios libros físicos.
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-dark">Apuntes</span>
              <span className="badge text-bg-dark">Documentación</span>
              <span className="badge text-bg-dark">GitHub</span>
              <span className="badge text-bg-dark">Markdown</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <i className="bi bi-award"></i>
            <p className="experiencia-titulo">Estudiante</p>
            <p>
              Curse por cuatro meses de manera intensiva, todos los días de 9:00
              AM hasta 19:00 PM + 800 hs. En este curso estuve a cargo de todas
              las tecnologías aprendidas, pudiendo recurrir a asistentes y
              profesionales en JavaScript y creación de páginas web. Al día de
              hoy continúo como autodidacta y viendo cursos en internet.
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-dark">Plataforma5</span>
              <span className="badge text-bg-dark">Bootcamp</span>
              <span className="badge text-bg-dark">Cursos</span>
              <span className="badge text-bg-dark">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
