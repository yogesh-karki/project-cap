"use client";

import React, { useRef } from "react";
import { Container, Grid } from "@mui/material";
import homeStyle from "../styles/home.module.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// hooks
import { useIsomorphicLayoutEffect } from "@/hook";
import { ButtonUnderLine } from "./ActonButton";

const HomeOutputs = () => {
  const cardRrefs = useRef([]);
  const outputsData = [
    {
      tag: "Output 1",
      title:
        "Integrated plastic collection model developed by engaging marginalized community members, IWWs and youth groups ",
      text: `<ul>
              <li>
                Strengthening plastic waste collection mechanisms. An integrated plastic collection model engaging marginalized communities, IWWs, and youth groups.
              </li>
          
            </ul>`,
    },
    {
      tag: "Output 2",
      title:
        "Inclusive recycling network developed for value addition of plastic waste ",
      text: `<ul>
              <li>
                The project is based on the premise that plastic leaks into river systems to be avoided by focusing on recycling facilities to add value to the collected plastic waste.  
              </li>
         
            </ul>`,
    },
    {
      tag: "Output 3",
      title:
        "Engagement of Key stakeholders to foster enabling environment for plastic waste management through education, awareness dialogues, and advocacy",
      text: `<ul>
              <li>
                Involving key stakeholders through education, awareness dialogues, and advocacy to support an enabling environment for plastic waste management. 
              </li>
            </ul>`,
    },
    {
      tag: "Output 4",
      title:
        "Efficient Knowledge gathering and dissemination to support national and regional replication ",
      text: `<ul>
              <li>
                Efficient processes will be implemented to gather and disseminate knowledge effectively, supporting the replication of successful practices in both national and regional contexts. 
              </li>
       
            </ul>`,
    },
  ];

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div className="wrap">
      {outputsData.map((val, index) => {
        return (
          <div key={index} ref={(el) => (cardRrefs.current[index] = el)}>
            <Grid container spacing={3}>
              <Grid item md={6}></Grid>

              <Grid item md={6}>
                <div className={homeStyle.box}>
                  <div className={homeStyle.output_content}>
                    <div className={homeStyle.tag}>{val.tag}</div>
                    <h5>{val.title}</h5>
                    <div className={homeStyle.outputdetail}>
                      <div dangerouslySetInnerHTML={{ __html: val.text }} />

                      <div className={homeStyle.output_content_footer}>
                        <ButtonUnderLine title={"Read More"} />

                        <svg
                          viewBox="0 0 100 50"
                          enableBackground="new 0 0 100 50"
                        >
                          <defs>
                            <linearGradient
                              id="progress"
                              x1="0"
                              y1="1"
                              x2="0"
                              y2="0"
                            >
                              <stop id="stop1" offset="0" stopColor="blue" />
                              <stop
                                id="stop2"
                                offset="0"
                                stopColor="lightblue"
                              />
                            </linearGradient>
                          </defs>
                          <g>
                            <path
                              fill="url(#progress)"
                              d="M51.33,34.99l5.02,5c8.25,8.22,21.66,8.21,29.89-0.03c4-4,6.2-9.31,6.2-14.96c0-5.65-2.2-10.96-6.2-14.96
                                C78,1.8,64.59,1.79,56.35,10.01L34.19,32.09c-3.9,3.89-10.24,3.88-14.14-0.01c-3.9-3.9-3.9-10.25,0-14.15
                                C22,15.98,24.57,15,27.13,15c2.56,0,5.11,0.97,7.06,2.91l5,4.96l7.91-7.86l-5.04-4.99c-8.25-8.22-21.66-8.21-29.89,0.03
                                c-8.25,8.25-8.25,21.67,0,29.92c4.12,4.12,9.54,6.18,14.96,6.18c5.41,0,10.81-2.05,14.93-6.16l22.15-22.07
                                c3.9-3.89,10.24-3.88,14.14,0.01c1.89,1.89,2.93,4.4,2.93,7.08s-1.04,5.19-2.93,7.08c-3.89,3.89-10.24,3.9-14.14,0.01l-4.99-4.97
                                L51.33,34.99z"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default HomeOutputs;
