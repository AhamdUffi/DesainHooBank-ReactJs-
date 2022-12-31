import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-full w-[140px] h-[140px] rounded-full bg-blue-gradient p-1 cursor-pointer`}
  >
    <div
      className={`bg-primary w-[100%] h-[100%] rounded-full flex justify-center items-center `}
    >
      <div className={`${styles.flexStart} flex-col`}>
        <p className={`flex font-poppins font-medium text-[18px]  text-white`}>
          <span className={`text-gradient mr-2`}>Get</span>
          <img src={arrowUp} alt="arrowUp" className={`w-[23px] h-[23px] `} />
        </p>
        <span className={`text-[18px] text-white font-medium text-gradient`}>
          Started
        </span>
      </div>
    </div>
  </div>
);

export default GetStarted;
