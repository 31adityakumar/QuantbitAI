import About from "../../Components/About/About";
import Hero from "../../Components/Hero/Hero";
import Internships from "../../Components/Internships/Internships";
import Services from "../../Components/Services/Services";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <About />
      <Services />
      <Internships />
    </section>
  );
};

export default Home;
