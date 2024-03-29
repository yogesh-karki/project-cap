import React from "react";
import componentStyle from "@/styles/component.module.scss";
import { Container } from "@mui/material";
import Link from "next/link";
import { KeyboardArrowRight } from "@mui/icons-material";

const InnerBanner = ({ title, parent, image, containerSize }) => {
  return (
    <section
      className={componentStyle.banner_page}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Container maxWidth={`${containerSize ? containerSize : "md"}`}>
        <div className={componentStyle.banner_page_text}>
          <ul>
            <li>
              <Link href="/">Home</Link>
              <span>
                <KeyboardArrowRight />{" "}
              </span>
            </li>

            {parent ? (
              <li>
                <Link href="#">{parent}</Link>
                <span>
                  <KeyboardArrowRight />
                </span>
              </li>
            ) : (
              ""
            )}
          </ul>
          <h2>{title}</h2>
        </div>
      </Container>
    </section>
  );
};

export default InnerBanner;
