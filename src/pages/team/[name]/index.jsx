import React from "react";
import Head from "next/head";
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import team from "../data";
import componentStyle from "../../../styles/component.module.scss";

import Link from "next/link";
import { KeyboardArrowRight } from "@mui/icons-material";

const TeamDetails = (params) => {
  const router = useRouter();

  const { name } = router.query;

  const selectedMember = team.find(
    (member) => member.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  console.log(selectedMember);

  return (
    <>
      <Head>
        <title>Team | GREENSHIFT NEPAL</title>
        <meta property="og:image" content="./XDfMiMpv1kt6nn5JPDLG.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>
      <div style={{ marginTop: "90px" }}>
        <Container maxWidth="lg" className={componentStyle.team_page}>
          <div className={componentStyle.no_banner_breadcrumb}>
            <ul>
              <li>
                <Link href="/">Home</Link>
                <span>
                  <KeyboardArrowRight />
                </span>
              </li>
              <li>
                <Link href="/team">Team</Link>
                <span>
                  <KeyboardArrowRight />
                </span>
              </li>
              <li>
                <a href="#">{selectedMember.name}</a>
              </li>
            </ul>
          </div>

          <Grid container spacing={5}>
            <Grid item md="4">
              <img src={selectedMember.image} alt="" />
            </Grid>

            <Grid item md="8">
              <div className={componentStyle.team_page_detail}>
                <h3>{selectedMember.name}</h3>
                <h6>{selectedMember.position}</h6>
                <p>{selectedMember.text}</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default TeamDetails;
