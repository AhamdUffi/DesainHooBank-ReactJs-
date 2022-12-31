import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../contents";
import { quotes } from "../assets";

const Feedback = ({ name, content, title, img, index }) => (
  <div className="flex flex-col justify-between px-3 py-3 feedback-card max-w-[350px] rounded-[12px] gap-3 mt-5">
    <img
      src={quotes}
      alt="quotes"
      className=" min-w-[12px] min-h-[17px] max-w-[18px] max-h-[8px] "
    />
    <p className={`${styles.paragraph} text-normal`}>
      Money is only a tool. It will take you wherever you wish, but it will not
      replace you as the driver.
    </p>
    <div className="flex flex-row w-full mt-5 items-start">
      <img src={img} alt={`peaple ${index}`} className="w-[48px] h-[48px]" />
      <div className="text-white ml-5">
        <h3>{name}</h3>
        <span className="text-[12px] text-dimWhite">{title}</span>
      </div>
    </div>
  </div>
);

const Testimonial = () => (
  <section id="testimonial" className={`${styles.flexCenter} flex-col`}>
    <div className="flex md:flex-row sm:items-center w-full flex-col">
      <h2 className={`${styles.heading2} flex flex-1`}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <p className={`${styles.paragraph}  flex flex-1`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1] gap-3 mt-5">
      {feedback.map((card, index) => (
        <Feedback key={card.id} {...card} index={index} />
      ))}
    </div>
  </section>
);

export default Testimonial;
