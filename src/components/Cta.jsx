import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";

const Cta = () => (
  <section
    className={`${styles.flexCenter} w-full bg-black-gradient  px-10 py-10 rounded-[12px] mt-5 sm:flex-row flex-col`}
  >
    <div className="flex flex-col flex-1">
      <h2 className={`${styles.heading2} ss:text-[48px] text-[38px]`}>
        Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <Button style={`flex mt-5`} />
  </section>
);

export default Cta;
