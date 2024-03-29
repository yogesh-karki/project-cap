import React, { useState, useRef } from "react";

import componentStyle from "../../styles/component.module.scss";

import { useIsomorphicLayoutEffect } from "@/hook";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

import { Container, Grid } from "@mui/material";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import MunicipalityData from "./data/data.json";

const MunicipalityList = () => {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  const [chartPlasticData, setChartPlasticData] = useState({
    generated: 100,
    collected: 20,
  });

  const options = {
    chart: {
      type: "pie",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    series: [
      {
        name: "Total Plastics",
        data: [
          {
            name: "Plastics Generated",
            y: chartPlasticData.generated,
            z: 0,
            color: "#ffb57c59",
          },
          {
            name: "Plastics Collected:",
            y: chartPlasticData.collected,
            z: 0,
            color: "#ffa35c",
          },
        ],
        dataLabels: {
          enabled: false,
        },
      },
    ],
  };

  const ImapctCard = ({ impactData }) => {
    let selectedMunicipality = impactData;

    return (
      <div className={componentStyle.impact_box}>
        {/* <div
          className={componentStyle.impact_box_close}
          //   onClick={resetMapBox}
        >
          <CloseIcon />
        </div> */}

        <div className={componentStyle.data_title}>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={6}>
              <p>
                <small>Area:</small>
                {selectedMunicipality.stats.area}
              </p>
            </Grid>

            <Grid item xs={6}>
              <p>
                <small>Population:</small>
                {selectedMunicipality.stats.population}
              </p>
            </Grid>
          </Grid>
        </div>

        <div className={componentStyle.chart_data}>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item sm={7}>
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
                containerProps={{
                  style: { height: "230px", width: "200px" },
                }}
              />
            </Grid>
            <Grid item sm={5}>
              <div className={componentStyle.chart_data_item}>
                <span>Total Plastic Generated</span>
                <h4>
                  {selectedMunicipality.stats.plastics_generated}{" "}
                  <small>TPM</small>
                </h4>
              </div>

              <div className={componentStyle.chart_data_item}>
                <span>Total Plastic Collected</span>
                <h4>
                  {selectedMunicipality.stats.plastics_collected}{" "}
                  <small>TPM</small>
                </h4>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={componentStyle.chart_issue}>
          <div className={componentStyle.chart_issue_card}>
            <h6>Major Issues</h6>
            <p>{selectedMunicipality.stats.major_issue}</p>
          </div>

          <div className={componentStyle.chart_issue_card}>
            <h6>River leakage</h6>
            <p>{selectedMunicipality.stats.river_leakage}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={componentStyle.municipality_responsive}>
      {MunicipalityData.map((data, index) => {
        return (
          <div className={componentStyle.card} key={index}>
            <div
              className={componentStyle.card_title}
              onClick={() => setSelectedIndex(index)}
            >
              <h5>{data.title}</h5>
              <p>({data.stats.efficiency}% efficiency) </p>

              <div className={componentStyle.icon}>
                <AddIcon />
              </div>
            </div>

            {selectedIndex == index ? <ImapctCard impactData={data} /> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default MunicipalityList;
