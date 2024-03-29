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
        containerSize="lg"
        title="Activities"
        parent="Activities"
        image="/quiet-issue-underwater-plastics-float-blue-sea.jpg"
      />

      {data.map((data, index) => {
        return (
          <div key={index} className={style.output}>
            <Container maxWidth="lg">
              <div className={style.output_title_main}>
                <h3>{data.title}</h3>
                <h5>{data.text}</h5>
              </div>

              {data.activities.map((val, index) => {
                return (
                  <div key={index} className={style.activity_box}>
                    <Grid
                      container
                      spacing={6}
                      className={style.activity_box_grid}
                    >
                      <Grid item md={6}>
                        <img src={val.activity_image} alt="" />
                      </Grid>

                      <Grid item md={6}>
                        <span>{val.activity_head}</span>
                        <h6>{val.activity_title}</h6>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: val.activity_text,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Container>
          </div>
        );
      })}
    </>
  );
};

export default Activities;
