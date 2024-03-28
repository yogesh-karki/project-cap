import Head from "next/head";

import { Container, Grid } from "@mui/material";

import InnerBanner from "../../components/Banner/InnerBanner";
import style from "./style.module.scss";

import data from "./data.json";

const Activities = () => {
  return (
    <>
      <Head>
        <title>ABOUT | GREENSHIFT NEPAL</title>
        <meta property="og:image" content="./XDfMiMpv1kt6nn5JPDLG.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>

      <InnerBanner
        title="Activities"
        parent="Activities"
        image="/quiet-issue-underwater-plastics-float-blue-sea.jpg"
      />

      <Container maxWidth="lg">
        {data.map((data, index) => {
          return (
            <div key={index} className={style.output}>
              <div className={style.output_title_main}>
                <h3>{data.title}</h3>
                <h5>{data.text}</h5>
              </div>

              {data.activities.map((val, index) => {
                return (
                  <Grid container key={index}>
                    <Grid item md={6}>
                      <img src="" alt="" />
                    </Grid>

                    <Grid item md={6}>
                      <span>{val.activity_head}</span>
                      <h5>{val.activity_title}</h5>
                      <div
                        dangerouslySetInnerHTML={{ __html: val.activity_text }}
                      />
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Activities;
