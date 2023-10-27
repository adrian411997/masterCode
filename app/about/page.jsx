import React from "react";
import Layout from "@/components/utilities/Layout/Layout";
import Portada from "@/components/utilities/portada/Portada";
import Carac from "@/components/Home/Carac/Carac";

const AboutPage = () => {
  const props = {
    className: "about",
    text: "En KodexNetz, somos una empresa colombiana especializada en el desarrollo de software y diseño multimedia. Llevamos 8 años en el mercado nacional e internacional. Estamos enfocados en identificar y satisfacer las necesidades de nuestros clientes, brindando una asesoría integral de la más alta calidad, lo que nos ha permitido desarrollar ideas de negocio y mantener una visión amplia para generar de la mano con cada uno de nuestros clientes, proyectos de gran envergadura.",
    uptitle: "Sobre nosotros",
    title: "Creamos, desarrollamos y promovemos ideas para su empresa. ",
  };
  return (
    <>
      <Portada data={props} />
      <Layout gradient={"gradient"} rounded={"borderAll"}>
        <Carac />
      </Layout>
    </>
  );
};

export default AboutPage;
