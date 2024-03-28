import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ActionButton } from "../ActonButton";

import homeStyle from "@/styles/home.module.scss";

const Banner = () => {
  let bannerImages = [
    {
      image: "ocean-plastic-free-1080x771.jpg",
    },
    {
      image: "plastic-waste-quietly-gathers-ocean-unnoticed-by-marine-life.jpg",
    },
    {
      image: "guy-lake-makes-fire.jpg",
    },
  ];

  return (
    <section className={homeStyle.hero}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        effect={"fade"}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        loop={"true"}
        modules={[Autoplay, Navigation]}
        navigation={true}
        className="homeSlider"
      >
        {bannerImages.map((val, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={homeStyle.hero_slide}
                style={{ backgroundImage: `url(${val.image})` }}
              ></div>
            </SwiperSlide>
          );
        })}
        <div className={homeStyle.hero_text}>
          <h1> Plastic Pollution into Sustainable Solutions</h1>

          <p>
            Working together to prevent plastic leakages in rivers, promoting
            collective responsibilities and sustainable practices for the
            preservation of our water ecosystem.
          </p>

          <ActionButton title={"Learn More"} style={"light"} />
          {/* <ActionButton title={"Dark More"} style={"dark"} /> */}
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
