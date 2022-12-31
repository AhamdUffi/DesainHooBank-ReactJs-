import styles, { layout } from "../style";
import { Button } from "./index";
import { features } from "../contents";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      features.length - 1 === index ? `mb-0` : "mb-0"
    } feature-card cursor-pointer `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center`}
    >
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`} />
    </div>
    <div className={`flex flex-col ml-3`}>
      <h4
        className={`text-white font-semibold test-[18px] leading-5 mb-1 font-poppins `}
      >
        {title}
      </h4>
      <p
        className={`text-dimWhite font-normal text-[14px] leading-5 mb-1 font-poppins`}
      >
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section className={`flex ${layout.section}  `} id="business">
    <div className={`${layout.sectionInfo}`}>
      <h2 className={` ${styles.heading2} text-white`}>
        You do the business, <br className={`sm:block hidden`} /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button style="mt-4" />
    </div>

    <div className={`${layout.sectionImg} flex flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
