import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { ButtonUnderLine } from "../components/ActonButton";
import homeStyle from "@/styles/home.module.scss";

import { Navigation } from "swiper/modules";

const Highlight = () => {
  let highlight_cards = [
    {
      image: "ocean-plastic-free-1080x771.jpg",
      label: "News",
      title: "Harmonizing Growth",
    },
    {
      image: "plastic-waste-quietly-gathers-ocean-unnoticed-by-marine-life.jpg",
      label: "Blog",
      title: "Harmonizing Growth",
    },
    {
      image: "img.jpg",
      label: "Blog",
      title: "Harmonizing Growth",
    },
    {
      image: "thumbnail.jpg",
      label: "Research",
      title: "Harmonizing Growth",
    },
    {
      image: "guy-lake-makes-fire.jpg",
      label: "Event",
      title: "Harmonizing Growth",
    },
    {
      image: "guy-lake-makes-fire.jpg",
      label: "Blog",
      title: "Harmonizing Growth",
    },
  ];

  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="highlightSlider"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {highlight_cards.map((val, index) => {
        return (
          <SwiperSlide
            key={index}
            className={homeStyle.highlight_slide}
            style={{ backgroundImage: `url(${val.image})` }}
          >
            <div className={homeStyle.highlight_slidecontent}>
              <div className={homeStyle.label}>{val.label}</div>
              <div className={homeStyle.about_highlight}>
                <h4>{val.title}</h4>

                <div className={homeStyle.cta}>
                  <ButtonUnderLine title={"Explore"} style={"dark"} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Highlight;
