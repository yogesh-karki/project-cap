import Head from "next/head";

import React from "react";
import InnerBanner from "../../components/Banner/InnerBanner";

import { Container, Grid } from "@mui/material";

import componentStyle from "../../styles/component.module.scss";
import data from "./data.json";

import { ButtonUnderLine } from "@/components/ActonButton";

const index = () => {
  return (
    <>
      <Head>
        <title>Team | GREENSHIFT NEPAL</title>
        <meta property="og:image" content="./XDfMiMpv1kt6nn5JPDLG.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>
      <InnerBanner title="Team" image="/team.jpg" />

      <section className={componentStyle.textbox}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {data.map((data, index) => {
              let link = data.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Grid
                  key={index}
                  item
                  md={6}
                  className={componentStyle.team_card}
                >
                  <Grid container spacing={2}>
                    <Grid item sm={6}>
                      <img src={data.image} alt="" />
                    </Grid>

                    <Grid item sm={6}>
                      <div className={componentStyle.team_card_detail}>
                        <h5>{data.name}</h5>
                        <h6>{data.position}</h6>
                        <p>{data.text}</p>
                        <ButtonUnderLine
                          title="Learn More"
                          style="dark"
                          link={`/team/${link}`}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default index;
