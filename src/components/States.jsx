import React from "react";
import { states } from "../contents";

const States = () => (
  <section>
    <ul
      className={`flex flex-row flex-wrap  justify-center items-center gap-5`}
    >
      {states.map((state, index) => (
        <li
          key={state.id}
          className={` flex flex-row flex-wrap justify-center items-center`}
        >
          <div
            className={`flex flex-row gap-3 w-full justify-center items-center`}
          >
            <div
              className={`text-white sm:text-[40px] text-[30px] font-semibold`}
            >
              {state.value}
            </div>
            <div
              className={`text-gradient sm:text-[16px] text-[14px] font-semibold font-normal`}
            >
              {state.title}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default States;
