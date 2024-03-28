import React from "react";
import Link from "next/link";

import BtnStyle from "@/styles/component.module.scss";

const ActionButton = ({ title, style }) => {
  return (
    <div className={style == "light" ? "" : BtnStyle.dark_btn}>
      <Link href="" className={BtnStyle.main_btn}>
        <svg>
          <rect
            x="5"
            y="5"
            rx="25"
            fill="none"
            stroke="#fff"
            width="200"
            height="50"
          ></rect>
        </svg>

        <span>{title}</span>
      </Link>
    </div>
  );
};

const ButtonUnderLine = ({ title, style, link }) => {
  return (
    <div className={style == "light" ? "" : BtnStyle.dark_btn}>
      <Link href={link ? link : "/"} className={BtnStyle.btn_underline}>
        {title}
      </Link>
    </div>
  );
};

export { ActionButton, ButtonUnderLine };
