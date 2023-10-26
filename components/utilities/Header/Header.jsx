"use client";

import React, { useState, useEffect } from "react";
import "./Header.css";
import icono from "../../assets/icono.png";
import Image from "next/image";

const Header = () => {
  const [background, setBackground] = useState("");
  const [showMenu, setShowMenu] = useState("");
  const changeColorHeader = () => {
    if (document.documentElement.scrollTop > 0) {
      setBackground("notInTop");
    } else {
      setBackground("");
    }
  };
  const showAndHidden = () => {
    setShowMenu(showMenu === "" ? "show" : "");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColorHeader);
  });
  return (
    <header className={`${background}`}>
      <div className="header-space">
        <div className="logo">
          <Image src={icono} alt="icono" width={50} height={50} />
        </div>
        <div className="menu-icon">
          <svg
            id="resp"
            version="1.1"
            width="40px"
            viewBox="0 0 256 256"
            onClick={showAndHidden}
          >
            <metadata>
              Svg Vector Icons : http://www.onlinewebfonts.com/icon
            </metadata>
            <g>
              <g>
                <path fill="#ffffff" d="M10,222.4h236v30H10V222.4L10,222.4z" />
                <path fill="#ffffff" d="M10,121.3h236v30H10V121.3L10,121.3z" />
                <path fill="#ffffff" d="M10,20.1h236v30H10V20.1L10,20.1z" />
              </g>
            </g>
          </svg>
        </div>
        <div className={`links ${showMenu}`}>
          <nav>
            <ul>
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Servicios</a>
              </li>
              <li>
                <a href="">Proyectos</a>
              </li>
              <li>
                <a href="">Acerca de Nosotros</a>
              </li>
              <li>
                <a href="">Contacto</a>
              </li>
              <li className="button-contact">
                <a href="">¡Hablemos!</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
