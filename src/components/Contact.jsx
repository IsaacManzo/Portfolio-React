import React from "react";
import "../componentsCss/Contact.css";

const Contact = () => {
  return (
    <section id="contacto" className="contacto seccion-oscura">
      <div className="container">
        <div className="container text-center rectangulo d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">
              <b>Hablemos!</b>
            </div>
            <div className="col-12 col-md-4 descripcion">
              Contactame para iniciar tu proyecto de desarrollo web
            </div>
            <div className="col-12 col-md-4">
              <a href="mailto:isaacemanzo51@gmail.com">
                <button type="button">
                  Contacto
                  <i className="bi bi-envelope-check-fill"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
