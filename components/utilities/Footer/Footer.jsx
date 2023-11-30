import React from "react";
import Layout from "../Layout/Layout";
import "./Footer.css";
import { links } from "@/components/data/data";
import Image from "next/image";

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
            </div>{" "}
            <div className="followus-icon">
              <div className="icons">
                <Image
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1701205194/logo_in_o0yrbw.png"
                  alt=""
                  width="30"
                  height={30}
                />
                <Image
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1701205194/png_link_ygkyhv.png"
                  alt=""
                  width="30"
                  height={30}
                />
                <Image
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1701205194/png_face_plj0vq.png"
                  alt=""
                  width="30"
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <p>© Copyright 2023 Master Code. All Rights Reserverd.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
