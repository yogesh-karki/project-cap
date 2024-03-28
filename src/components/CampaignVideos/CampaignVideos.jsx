import React from "react";
import { Container, Grid } from "@mui/material";

import PlaySvg from "../PlaySvg";

import homeStyle from "@/styles/home.module.scss";

const CampaignVideos = () => {
  let campaignVideos = [
    {
      href: "https://www.youtube.com/watch?v=y-sWaAj-p8w",
      video: "videoplayback.mp4",
    },
    {
      href: "https://www.youtube.com/watch?v=y-sWaAj-p8w",
      video: "videoplayback.mp4",
    },
    {
      href: "https://www.youtube.com/watch?v=y-sWaAj-p8w",
      video: "videoplayback.mp4",
    },
    {
      href: "https://www.youtube.com/watch?v=y-sWaAj-p8w",
      video: "videoplayback.mp4",
    },
    {
      href: "https://www.youtube.com/watch?v=y-sWaAj-p8w",
      video: "videoplayback.mp4",
    },
    {
      href: "https://www.youtube.com/watch?v=y-sWaAj-p8w",
      video: "videoplayback.mp4",
    },
  ];

  return (
    <section className={homeStyle.campaign_videos}>
      <Container maxWidth="xl">
        <h2>News & Updates</h2>
        <p>
          Project CAP operates across six municipalities in Nepal, strategically
          positioned along four major river basins, where the impact of plastic
          leakage is most keenly felt. A collaborative initiative focused on the
          prevention of plastic leakages in water resources, empowering
          individuals and organizations to make a lasting impact on
          environmental conservation.
        </p>

        <Grid container spacing={4} style={{ marginTop: "32px" }}>
          {campaignVideos.map((val, index) => {
            return (
              <Grid item md={4} sm={6} xs={6} key={index}>
                <div className={homeStyle.video_clip}>
                  <a href={val.href} target="_blank">
                    <div className={homeStyle.clip_wrap}>
                      <video className={homeStyle.clip} loop muted>
                        <source src={val.video} type="video/mp4" />
                      </video>
                      <div className={homeStyle.hover_click}>
                        <div className={homeStyle.playbtn}>
                          <PlaySvg />
                        </div>
                      </div>
                    </div>
                    <div className={homeStyle.vid_desc}>
                      <h6>Plastic-Free Rivers and Seas for South Asia</h6>
                    </div>
                  </a>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default CampaignVideos;
