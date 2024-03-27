"use client";
import React from "react";
import Portada from "@/components/utilities/portada/Portada";
import Layout from "@/components/utilities/Layout/Layout";
import Work from "@/components/Home/Work/Work";
import AOS from "aos";
import Carac from "@/components/Home/Carac/Carac";
import "aos/dist/aos.css";
import "./page.css"
import { useEffect } from "react";
const Servicios = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const props = {
    className: "servicio",
    text: [
      "Como Agencia de Marketing Digital innovadora, trabajamos soluciones integrales atentas a la evolución de Internet, de las Redes Sociales y la Experiencia de los usuarios con las Marcas.",
      "Nuestra amplia gama de servicios se adapta a las necesidades individuales de cada uno ya que nos mantenemos actualizados con las últimas tendencias y tecnologías en desarrollo para garantizar que nuestros clientes reciban las soluciones más innovadoras y efectivas. Confíe en nosotros para llevar su presencia en línea al siguiente nivel.",
    ],
    uptitle: "SERVICIOS",
    title: "¿Qué podemos hacer por su empresa?",
  };
  return (
    <>
      <Portada data={props} />
      <div className="empty">
      <Layout gradient={"gradient"} rounded={"borderAll"}>
        <Carac />
      </Layout>
      </div>
    </>
  );
};

export default Servicios;
