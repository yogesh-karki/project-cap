import Head from "next/head";

import { Container, Grid } from "@mui/material";

import InnerBanner from "../../components/Banner/InnerBanner";
import style from "./style.module.scss";

import data from "./data.json";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "@/hook";

const Activities = () => {
  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let imageContainer = document.querySelectorAll(".image_container");

  //   imageContainer.forEach((parentEL) => {
  //     let img = parentEL.querySelector("img");

  //     const gsapCtx = gsap.context(() => {
  //       gsap.from(img, {
  //         opacity: 0,
  //         y: -20,
  //         scrollTrigger: {
  //           trigger: parentEL,
  //           start: "top 80%",
  //           markers: true,
  //         },
  //       });

  //       ScrollTrigger.refresh();
  //     });

  //     return () => gsapCtx.revert();
  //   });
  // });
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
                        <div className="image_container">
                          <img src={val.activity_image} alt="" />
                        </div>
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
