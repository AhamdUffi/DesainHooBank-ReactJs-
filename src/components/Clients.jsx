import { clients } from "../contents";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 mt-5 w-full`}>
    <div
      className={`${styles.flexCenter} w-full justify-evenly flex-wrap items-center`}
    >
      {clients.map((client) => (
        <div key={client.id} className="md:mt-5 mt-8">
          <img
            src={client.logo}
            alt={client.id}
            className="ms-[172px] ms-[50px] w-[150px] h-[40px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
