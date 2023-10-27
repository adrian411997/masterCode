import React from "react";
import Portada from "../../components/utilities/portada/Portada";
import Layout from "@/components/utilities/Layout/Layout";
import Contac from "@/components/Home/Contact/Contac";

const Contact = () => {
  const props = {
    className: "about",
    text: "Contamos con expertos dispuestos a colaborar con usted desde cualquier parte del mundo. Póngase en contacto con nosotros y programe o reserve un reunión.",
    uptitle: "CONTACTO",
    title: "Desarrollo web a medida y emprendimiento corporativo",
  };
  return (
    <>
      <Portada data={props} />
      <Layout>
        <Contac />
      </Layout>
    </>
  );
};

export default Contact;
