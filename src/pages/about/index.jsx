import Head from "next/head";
import React from "react";
import { Container, Grid } from "@mui/material";

import InnerBanner from "../../components/Banner/InnerBanner";

import componentStyle from "../../styles/component.module.scss";

const about = () => {
  return (
    <>
      <Head>
        <title>ABOUT | GREENSHIFT NEPAL</title>
        <meta property="og:image" content="./XDfMiMpv1kt6nn5JPDLG.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>

      <InnerBanner
        title="Project Description"
        image="/quiet-issue-underwater-plastics-float-blue-sea.jpg"
      />

      <section className={componentStyle.textbox}>
        <Container maxWidth="md">
          <h2>Project CAP</h2>
          <h5>
            Aims to divert plastic waste into product value chain from landfills
            and rivers by strengthening plastic waste collection mechanism and
            strengthening recycling efforts through the introduction of
            technological innovations.
          </h5>
          <p>
            The project will develop a collaborative model to engage all the
            major stakeholders in establishing a strong plastic waste value
            chain. The project works in six municipalities along four major
            river basins of Nepal by aligning with the proven and effective
            PARLEY AIR theme. Project CAP is one of the funded projects of
            PLEASE Project (Plastic Free Rivers and Seas of South Asia) in Nepal
            which is being implemented by The South Asia Cooperative Environment
            Programme (SACEP), in partnership with the United Nations Office for
            Procurement Services (UNOPS), funded by the World Bank and Parley
            for the Oceans. {" "}
          </p>
        </Container>
      </section>
    </>
  );
};

export default about;
