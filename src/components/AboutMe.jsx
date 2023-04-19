import React from "react";
import "../componentsCss/AboutMe.css";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="sobre-mi seccion-oscura">
      <div className="contenedor">
        <h2 className="seccion-titulo texto-blanco">Conoce a Isaac Manzo</h2>
        <p className="seccion-texto">
          Soy una persona apasionada por la programación, siempre predispuesto a
          aprender más y formarme constantemente, cómo así también me interesa
          compartir con los demás mis conocimientos y experiencias. Soy muy
          detallista y minucioso, lo cual me ayuda a evitar errores en mis
          trabajos. Cuento con excelentes habilidades comunicativas y escucha
          activa.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
