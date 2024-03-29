import Head from "next/head";

import React from "react";
import InnerBanner from "../../components/Banner/InnerBanner";

import { Container, Grid, Card } from "@mui/material";

import componentStyle from "../../styles/component.module.scss";

const strategy = () => {
  const airCardData = [
    {
      title: "AVOID",
      subtitle: "(REDUCE, REPLACE)",
      text: "Capacity of key stakeholders is developed to manage plastic waste efficiently",
      image: "",
    },
    {
      title: "INTERCEPT",
      subtitle: "(RETRIEVE, RECYCLE)",
      text: "Strong plastic waste value chain is developed to intercept plastic waste leakages",
      image: "",
    },
    {
      title: "REDESIGN",
      subtitle: "(AWARENESS)",
      text: "Community members practice proper waste disposal and reduce their plastic consumptions",
      image: "",
    },
  ];

  return (
    <>
      <Head>
        <title>Strategy | GREENSHIFT NEPAL</title>
        <meta property="og:image" content="./XDfMiMpv1kt6nn5JPDLG.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>
      <InnerBanner parent="About" title="Strategy" image="/224.jpg" />

      <section className={componentStyle.textbox}>
        <Container maxWidth="md">
          <h2>PARLEYS’ AIR Strategy</h2>
          <h5>
            PARLEYS’ AIR Strategy is focused on controlling the fast-growing
            marine pollution.
          </h5>
          <p>
            The initials AIR stand for: Avoid plastic wherever possible
            intercept plastic waste redesign the material itself. Each component
            and activity within our project are aligned with the principles of
            the AIR strategy. The project is designed to reduce plastic leakage
            through – a reduction in plastic consumption and, intercepting for
            recycling.
          </p>
        </Container>
      </section>

      <section className={componentStyle.air_box}>
        <Container>
          <Grid
            container
            spacing={3}
            style={{ display: "flex" }}
            className={componentStyle.air_grid}
          >
            {airCardData.map((data, index) => {
              return (
                <Grid
                  item
                  md={4}
                  key={index}
                  className={componentStyle.air_grid_card}
                  style={{ flexGrow: 1 }}
                >
                  <Card
                    style={{ height: "100%" }}
                    className={componentStyle.card_wrap}
                  >
                    <h4>{data.title}</h4>
                    <h6>{data.subtitle}</h6>

                    <p>{data.text}</p>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default strategy;
