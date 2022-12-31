import styles from "./style";
import {
  Hero,
  Navbar,
  Billing,
  Business,
  States,
  CardDeal,
  Testimonial,
  Clients,
  Cta,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <States />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
