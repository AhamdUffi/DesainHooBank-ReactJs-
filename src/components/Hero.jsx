import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
      >
        <img src={discount} alt="discount" className={`w-[27px] h-[27px]`} />
        <p className={`${styles.paragraph} md:text-[18px] text-[12px]`}>
          <span className={`text-white`}>20%</span> DISCOUNT FOR{" "}
          <span className={`text-white`}>1 MONTH</span> ACCOUNT
        </p>
      </div>

      <div className={`flex flex-row justify-between items-center w-full`}>
        <h1
          className={`text-white font-semibold sm:text-[72px] text-[42px] sm:leading-[100px] leading-[42px] ss:mt-0 mt-4`}
        >
          Text Next <br className={`hidden sm:block `} />
          <span className="text-gradient">Gradient</span>{" "}
        </h1>
        <div className={`sm:flex hidden md:mr-4 mr-0`}>
          <GetStarted />
        </div>
      </div>
      <h1
        className={`text-white font-medium sm:text-[72px] text-[42px] w-full ss:leading-[100px] `}
      >
        Payment Methode
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`relative flex flex-1`}>
      <img
        src={robot}
        alt="robot"
        className={`w-[100%] h-[100%] relative z-[5]`}
      />
      <div
        className={`absolute w-[45%] h-[80%] pink__gradient top-0 z-[0]`}
      ></div>
      <div
        className={`absolute w-[45%] h-[80%] white__gradient top-0 z-[1] rounded-full bottom-20`}
      ></div>
      <div
        className={`absolute w-[50%] h-[50%] blue__gradient right-20 bottom-20 z-[0]`}
      ></div>
    </div>
  </section>
);

export default Hero;
