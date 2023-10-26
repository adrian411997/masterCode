import React from "react";

import Home from "../components/Home/Home";
import About from "@/components/Home/About/About";
import Skills from "@/components/utilities/skills/Skills";
import Carac from "@/components/Home/Carac/Carac";
import Work from "@/components/Home/Work/Work";
import Contac from "@/components/Home/Contact/Contac";
import Layout from "@/components/utilities/Layout/Layout";

const IndexPage = () => {
  return (
    <>
      <Layout
        gradient={"gradient"}
        mainContent={"heightDIV"}
        rounded={"border"}
      >
        <Home />
      </Layout>
      <Layout>
        <About />
      </Layout>{" "}
      <Skills />
      <Layout gradient={"gradient"} rounded={"borderAll"}>
        <Carac />
      </Layout>
      <Layout>
        <Work />
      </Layout>
      <Layout>
        <Contac />
      </Layout>
    </>
  );
};

export default IndexPage;
