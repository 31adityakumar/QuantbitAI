import styles from "./About.module.scss";
const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.content}>
          <h1 className={styles.head}>About Us</h1>
          <h2>Empowering The Journey To Success</h2>
          <p>
            We understand that traditional internships can be difficult to
            obtain, especially in todays competitive job market. Thats why we
            created <b>QuantbitAI</b> - to provide students with the opportunity
            to work on projects and gain practical experience, all from the
            comfort of their own homes.
            <br />
            Our virtual internships offer a unique and innovative way for
            students to work on projects and gain hands-on experience in various
            industries. Our internships are designed to be flexible, allowing
            students to fit them into their busy schedules.
            <br />
            Our goal is to help students build their skills, network with
            professionals, and stand out in the job market. We believe that
            everyone should have the opportunity to launch their careers, and we
            are committed to making that a reality.
          </p>
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1691996271/about_bemihg.svg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
