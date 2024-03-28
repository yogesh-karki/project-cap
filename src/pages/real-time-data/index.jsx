import React from "react";
import MapComponent from "../../components/MapData/MapComponent";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Real Time Data | GREENSHIFT NEPAL</title>
        <meta property="og:image" content="./XDfMiMpv1kt6nn5JPDLG.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>
      <div style={{ marginTop: "90px" }}>
        <MapComponent />
      </div>
    </>
  );
};

export default page;
