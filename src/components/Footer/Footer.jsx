import { Container, Grid } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import footerStyle from "@/styles/footer.module.scss";

const Footer = () => {
  let marginBottom = { marginBottom: "30px" };

  return (
    <footer className={footerStyle.footer}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item style={marginBottom} lg={3} className={footerStyle.logo}>
            <a href="">
              <img src="/demologo.png" alt="" />
            </a>
          </Grid>

          <Grid item style={marginBottom} lg={3}>
            <h6>Contact Us</h6>
            <a href="">Pabitra Pyara Mar, Baluwatar, Kathmandu</a>
            <a href="">+977-1234566</a>
            <a href="">projectcapnepal@gmail.com</a>

            <div className={footerStyle.social}>
              <a target="_blank">
                <FacebookIcon />
              </a>
              <a target="_blank">
                <InstagramIcon />
              </a>
              <a target="_blank">
                <XIcon />
              </a>
            </div>
          </Grid>

          <Grid item style={marginBottom} lg={3}>
            <h6>Quick Links</h6>
            <a href="">About </a>
            <a href="">Activities</a>
            <a href="">Real Time Data</a>
            <a href="">News & Updates</a>
            <a href="">Contact </a>
          </Grid>

          <Grid item style={marginBottom} lg={3}>
            <div className={footerStyle.newsletter}>
              <h6>Let's Connect !</h6>

              <div className={footerStyle.newsletter_input}>
                <input type="text" placeholder="Your email address" />

                <button>
                  <ArrowOutwardIcon />
                </button>
              </div>

              <p>
                <strong>
                  We continually seek fresh individuals to become part of our
                  community.
                </strong>
              </p>
            </div>
          </Grid>
        </Grid>

        <div className={footerStyle.copyright}>
          <p>
            <small>© 2024 Project Cap Nepal.</small>
          </p>
          <p>
            <small>
              Powered by
              <a href="" target="_blank">
                Hue Shine
              </a>
            </small>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
