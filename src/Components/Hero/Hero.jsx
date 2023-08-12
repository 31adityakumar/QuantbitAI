import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroMain}>
          <h1 style={{ userSelect: "none" }}>QuantbitAI</h1>
          <h2 style={{ userSelect: "none" }}>
            Future Aheads
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
