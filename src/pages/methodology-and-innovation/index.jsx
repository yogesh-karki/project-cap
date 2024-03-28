import Head from "next/head";

import React from "react";
import InnerBanner from "../../components/Banner/InnerBanner";

import { Container, Grid, Card } from "@mui/material";

import componentStyle from "../../styles/component.module.scss";

const strategy = () => {
  let data = [
    {
      title: "BOTTOM-UP APPROACH",
      text: "PPP Model MRFs; CSOs of IWWs strengthened; Engagement in advocacy; Marginalized community for waste collection",
      image: "",
    },
    {
      title: "TECHNOLOGICAL INNOVATION",
      text: "Climate friendly; colored PET bottles; ETP for treatment of microplastics",
      image: "",
    },
    {
      title: "COLLABORATIVE APPROACH",
      text: "Key Stakeholders, youth and children; marginalized women; waste workers",
      image: "",
    },
  ];

  return (
    <>
      <Head>
        <title>Methodology and Innovation | GREENSHIFT NEPAL</title>
        <meta property="og:image" content="./XDfMiMpv1kt6nn5JPDLG.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>
      <InnerBanner
        title="Methodology and Innovation "
        parent="About"
        image="/plastic-waste-pollution-ocean-plastic-bottle-floating-ocean-generative-ai.jpg"
      />

      <section className={componentStyle.textbox}>
        <Container maxWidth="md">
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item md={6}>
              {data.map((data, index) => {
                return (
                  <div key={index} className={componentStyle.innov_card}>
                    <h5>{data.title}</h5>
                    <p>{data.text}</p>
                  </div>
                );
              })}
            </Grid>

            <Grid item md={6} className={componentStyle.innov_image}>
              <img src="./CAP Presentation.png" alt="" />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default strategy;
