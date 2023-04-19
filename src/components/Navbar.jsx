import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import "../componentsCss/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand" href="#">
            <img
              src="./src/assets/logo.png"
              width="150"
              alt="Logo de la pagina web"
            />
          </a>
          <ul className="navbar-nav">
            <Stack spacing="0" direction="row" align="center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#sobre-mi">
                  <Button borderRadius="50px" border="1px">
                    <b>Sobre mí</b>
                  </Button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">
                  <Button borderRadius="50px" border="1px">
                    <b>Proyectos</b>
                  </Button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  <Button borderRadius="50px" border="1px">
                    <b>Contacto</b>
                  </Button>
                </a>
              </li>
            </Stack>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
