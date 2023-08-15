import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
  <div className={styles.content}>
    <h2>QuantbitAI</h2>
    <p> <h3>Present is your <span className={styles.future}>Future</span></h3></p>
    <p> Build Skills n Launch Your Career</p>
    </div>
  <div className={styles.waves}></div>
</section>
  );
};

export default Hero;
