import React from "react";
import { Center } from "@chakra-ui/react";
import "../componentsCss/Hero.css";

const Hero = () => {
  return (
    <section className="hero aling-items-stretch">
      <div className="hero-principal">
        <Center>
          <img
            className="hero-imagen-perfil rounded-circle"
            src="./src/assets/perfil.jfif"
            alt="Foto perfil"
          />
        </Center>
        <h1>Bienvenid@ soy Isaac Manzo</h1>
        <h2>Desarrollo páginas web</h2>
      </div>
      <div className="hero-inferior">
        <img
          className="hero-inferior-imagen img-fluid"
          src="./src/assets/hero-inferior.svg"
          alt="Monitor, notebook y logos de HTML, CSS, JavaScript y React."
        />
      </div>
    </section>
  );
};

export default Hero;
