import React from "react";
import Layout from "../Layout/Layout";
import "./Footer.css";
import { links } from "@/components/data/data";

const Footer = () => {
  return (
    <Layout
      justify={"bewteen"}
      rounded={"border-up"}
      gradient={"notGradient"}
      flex={"flex"}
    >
      <div className="words-action">
        <div className="words-title">
          <h2>Nos encantaría saber de tu negocio</h2>
        </div>
        <div className="words-description">
          <p>
            Te invitamos a tener una reunión con nosotros para hablar mas en
            detalle sobre tu negocio o proyecto y empezar a trabajar juntos.
          </p>
        </div>
        <div className="words-button">
          <button>Contacto</button>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-links-contact">
          <div>
            <div className="footer-title">
              <h4>Enlace rápido</h4>
            </div>
            <div className="footer-links">
              <ul>
                {links.map((l, index) => (
                  <li key={index}>
                    <a href={l.href}>{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-info">
            <div className="footer-info-title">
              <h4>Informacion de contacto</h4>
            </div>
            <div className="first-contact">
              <h4>Salta - Argentina</h4>
              <p>fdsfdsfds@fdsfsdfs.com</p>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <p>© Copyright 2021 Kodexnetz All Rights Reserverd.</p>
          <a>Politicas de privacidad</a>
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
