import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="Service" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="w-[50%] h-[50%] absolute z-[3]  rounded-full -left-1/2 top-0 white__gradient" />
      <div className="w-[50%] h-[50%] absolute z-[0]  rounded-full -left-1/2 bottom-0 pink__gradient" />
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} text-[48px] leading-[76px]`}>
        Easily control your <br className="ss:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} text-[16px] max-w-[500px] `}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap mt-5">
        <img
          src={apple}
          alt="applestore"
          className={`h-[27px] object-contain cursor-pointer mr-5`}
        />
        <img
          src={google}
          alt="googlestore"
          className={` h-[27px] object-contain cursor-pointer `}
        />
      </div>
    </div>
  </section>
);

export default Billing;
