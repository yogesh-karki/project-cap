import React from "react";
import { Container, Grid } from "@mui/material";
import headerStyle from "@/styles/header.module.scss";
import Link from "next/link";

import { useIsomorphicLayoutEffect } from "@/hook";

const Header = () => {
  useIsomorphicLayoutEffect(() => {
    let navBtns = document.querySelectorAll(".nav-btn");
    let header = document.querySelector(".header");
    let subMenu = document.querySelectorAll(".submenu");
    let linkBtn = document.querySelectorAll(".link-btn");

    header.addEventListener("click", (event) => {
      if (event.target.closest(".nav-btn")) {
        let el = event.target.closest(".nav-btn");

        removeSubmenu();
        let subMenuCurrent = el.querySelector(".submenu");
        subMenuCurrent && header.classList.add(headerStyle.active);
        subMenuCurrent && subMenuCurrent.classList.add(headerStyle.active);
      } else if (event.target.closest(".link-btn")) {
        removeSubmenu();
      } else removeSubmenu();
    });

    linkBtn.forEach((btn) => {
      btn.addEventListener("click", removeSubmenu());
    });

    function removeSubmenu() {
      subMenu.forEach((menu) => {
        header.classList.remove(headerStyle.active);
        menu.classList.remove(headerStyle.active);
      });
    }
  });

  return (
    <header className={`${headerStyle.header} header`}>
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item md={3}>
            <div className={headerStyle.logo}>
              <Link className="link-btn" href={"/"}>
                <img src="/demologo.png" alt="" />
              </Link>
            </div>
          </Grid>

          <Grid item md={9}>
            <ul className={headerStyle.nav}>
              <li>
                <Link className="link-btn" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-btn">
                <a href="#">About</a>
                <div className={`${headerStyle.submenu} submenu`}>
                  <div>
                    <Link className="link-btn" href={"/about"}>
                      Project Description
                    </Link>
                  </div>
                  <div>
                    <Link className="link-btn" href={"/strategy"}>
                      Strategy
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="link-btn"
                      href="/methodology-and-innovation"
                    >
                      Methodology & Innovation
                    </Link>
                  </div>
                  <div>
                    <Link className="link-btn" href="/team">
                      Team{" "}
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link className="link-btn" href="/about">
                  Activities{" "}
                </Link>
              </li>
              <li>
                <Link className="link-btn" href="/real-time-data">
                  Real Time Data{" "}
                </Link>
              </li>
              <li className="nav-btn">
                <a href="#">Knowledge Hub</a>
                <div className={`${headerStyle.submenu} submenu`}>
                  <div>
                    <Link className="link-btn" href="/about">
                      News & Events
                    </Link>
                  </div>
                  <div>
                    <Link className="link-btn" href="/about">
                      Blogs
                    </Link>
                  </div>
                  <div>
                    <Link className="link-btn" href="/about">
                      Stories
                    </Link>
                  </div>
                  <div>
                    <Link className="link-btn" href="/about">
                      Publications{" "}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-btn">
                <a href="#">Join the Green Movement </a>
                <div className={`${headerStyle.submenu} submenu`}>
                  <div>
                    <Link className="link-btn" href="/about">
                      Campaign
                    </Link>
                  </div>
                  <div>
                    <Link className="link-btn" href="/about">
                      Pledge
                    </Link>
                  </div>
                  <div>
                    <Link className="link-btn" href="/about">
                      Pitch Your Ideas
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
