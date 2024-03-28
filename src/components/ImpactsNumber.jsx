import React from "react";
import homeStyle from "@/styles/home.module.scss";
import { Grid } from "@mui/material";

import VisibilitySensor from "react-visibility-sensor";

import CountUp from "react-countup";

let impactData = [
  {
    count: "5400",
    unit: "",
    text: "Tons of waste plastics collection and recyclying.",
  },
  {
    count: "3100",
    unit: "",
    text: "Tons of CO2 emissions avoided​ ​",
  },
  {
    count: "650",
    unit: "",
    text: "Direct and indirect employment generated ​​​​",
  },
  {
    count: "60",
    unit: "+",
    text: "Youths engaged as Change Makers in plastic waste management​​ ​",
  },
  {
    count: "3000",
    unit: "+",
    text: "School children engaged as Change Makers in plastic waste management​​ ​",
  },
  {
    count: "205",
    unit: "",
    text: "Marginalized community members engaged​​ ​",
  },
];

const ImpactsNumber = () => {
  return (
    <div className={homeStyle.impactWrap}>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <Grid container>
            {impactData.map((val, index) => {
              return (
                <Grid
                  item
                  md={2}
                  sm={6}
                  xs={6}
                  className={homeStyle.impact}
                  key={index}
                >
                  <div className={homeStyle.count}>
                    {isVisible ? <CountUp end={val.count} /> : "000"}{" "}
                    <small>{val.unit}</small>
                  </div>
                  <p>{val.text}​</p>
                </Grid>
              );
            })}
          </Grid>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default ImpactsNumber;
