"use client";
import React, { useState, useEffect } from "react";
import "./Header.css";
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
          <a href="/">
            <Image
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1700177088/400_1_llrza7.png"
              alt="icono"
              width={60}
              height={60}
            />
          </a>
          <div className="title-header">
            <h3 >MASTER CODE </h3>
        </div>
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
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/servicios">Servicios</a>
              </li>
              <li>
                <a href="/about">Acerca de Nosotros</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
              <li className="button-contact">
                <a 
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403872540005&text=Hola,%20tengo%20una%20consulta!"
                  target="_blank"
                  rel="noreferrer"  
                >¡Hablemos!</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
