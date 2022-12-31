import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../contents";

const Footer = () => (
  <section className={`${styles.flexCenter} mt-10 flex-col px-8 py-8  w-full`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-col flex-1 items-start">
        <img src={logo} alt="Hoobank" className=" W-[184px] h-[51px] " />
        <p className="text-[16px] text-dimWhite ">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex md:flex-1 flex-wrap md:w-auto w-full items-start justify-between mt-5">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className>
            <h3 className="text-white font-semibold text-[18px] mb-8">
              {footerLink.title}
            </h3>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={index}
                  className="text-dimWhite text-[16px] mb-2 hover:text-secondary"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    {/* social media */}
    <div className="flex md:flex-row flex-col md:justify-between justify-center items-center w-full border-t py-2 gap-3">
      <h6 className="flex flex-1 text-white text-center">
        Copyright &copy; 2021 HooBank. All Rights Reserved.
      </h6>
      <div className="flex flex-1 justify-end gap-4">
        {socialMedia.map((image) => (
          <a href={image.link} key={image.id} className="mr-5">
            <img src={image.icon} alt="" key={image.id} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
