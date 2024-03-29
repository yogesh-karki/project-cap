import React, { useState, useRef } from "react";
import componentStyle from "../../styles/component.module.scss";

import { useIsomorphicLayoutEffect } from "@/hook";

import { Container, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Marker, Map, Source, Layer } from "react-map-gl";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import NepalMap from "./data/MapOfNepal.json";
import MunicipalityMap from "./data/MapOfMunicipalities.json";

import MunicipalityData from "./data/data.json";

import { BorderLinearProgress, mapStyleLine, mapStyleFill } from "./styles";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MapComponent = () => {
  const mapRef = useRef(null);

  const [dataBoxIndex, setDataBoxIndex] = useState(false);
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);
  const [chartPlasticData, setChartPlasticData] = useState({
    generated: 100,
    collected: 20,
  });

  mapboxgl.accessToken =
    "pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2txZXphNHNlMGNybDJ1cXVmeXFiZzB1eSJ9.A7dJUR4ppKJDKWZypF_0lA";

  const [viewport, setViewport] = useState({
    latitude: 28.2913667,
    longitude: 86.5316036,
    minZoom: 6.2,
    maxZoom: 10,
    dragPan: false,
    scrollZoom: false,
  });

  const whereFly = (city) => {
    const map = mapRef.current.getMap();

    if (map) {
      map.flyTo({
        center: city.latLng,
        zoom: city.zoomValue,
      });
    }
  };

  const resetMapBox = () => {
    const map = mapRef.current.getMap();

    if (map) {
      map.flyTo({
        center: [86.5316036, 28.2913667],
        zoom: 6.2,
      });
    }

    setSelectedMunicipality(null);
    setDataBoxIndex(false);
  };

  let SideBarData = () => {
    return (
      <>
        <div
          className={componentStyle.map_data_box_close}
          onClick={resetMapBox}
        >
          <span>Reset Map</span>
          <CloseIcon />
        </div>

        <div className={componentStyle.data_title}>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item sm={7}>
              <h5>{selectedMunicipality.title}</h5>
            </Grid>

            <Grid item sm={5}>
              <p>
                <small>Area:</small>
                {selectedMunicipality.stats.area}
              </p>
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

                <p>({selectedMunicipality.stats.efficiency}% efficiency)</p>
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
      </>
    );
  };

  let SideBarInitial = () => {
    return (
      <div className={componentStyle.initial}>
        <p>
          Click on the highlighted municipalities to view the impacts of{" "}
          <strong>Project Cap</strong>
        </p>
      </div>
    );
  };

  const pins = MunicipalityData.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.longitude}
      latitude={city.latitude}
      onClick={(e) => {
        setDataBoxIndex(true);
        setSelectedMunicipality(city);
        whereFly(city);
        setChartPlasticData({
          generated: city.stats.plastics_generated,
          collected: city.stats.plastics_collected,
        });
      }}
    >
      <div
        className={`${componentStyle.map_pin} marker-pin 
        }`}
      >
        <span></span>
      </div>
    </Marker>
  ));

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

  return (
    <section className={componentStyle.map_section}>
      <div className={componentStyle.map_container}>
        <Map
          initialViewState={viewport}
          mapStyle="mapbox://styles/yogeshkarki/clua14f3500ju01pi4lc43s6a"
          mapboxAccessToken={mapboxgl.accessToken}
          ref={mapRef}
        >
          <Source id="nepalMap" type="geojson" data={NepalMap}>
            <Layer {...mapStyleLine} />
          </Source>

          {pins}

          <Source id="municipalityMap" type="geojson" data={MunicipalityMap}>
            <Layer {...mapStyleFill} />
          </Source>
        </Map>
      </div>

      <div className={componentStyle.map_title}>
        <h5>Plastics Collection</h5>
        <BorderLinearProgress variant="determinate" value={70} />
        <div className={componentStyle.target_grid}>
          <div className={componentStyle.target_item}>
            <p>Target Achieve</p>
            <h3>
              215 <small>tons</small>
            </h3>
          </div>

          <div className={componentStyle.target_item}>
            <p>Target Target</p>
            <h3>
              5 <small>kilo tons</small>
            </h3>
          </div>
        </div>
      </div>

      <Container maxWidth="xl">
        <div
          className={`${componentStyle.map_data_box} ${
            dataBoxIndex ? `${componentStyle.active}` : ""
          }`}
        >
          {dataBoxIndex ? <SideBarData /> : <SideBarInitial />}
        </div>
      </Container>
    </section>
  );
};

export default MapComponent;
