import styles from "./Internship.module.scss";

const Internships = () => {
  return (
    <section className={styles.internship}>
      <h1 className={styles.head}> Our Internships </h1>
      <div className={styles.box}>
        <div className={styles.card}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692003384/web_internship_cil7qc.svg"
            alt=""
          />
          <h2>Web Develpoment Internship</h2>
          <p>
            Our web development internship program provides hands-on training
            and real-world experience to aspiring web developers. Interns will
            have the opportunity to work on real-world web development projects,
            giving them the chance to apply what they have learned.
          </p>
          <a
            href="https://forms.gle/86fuQGkNqQsZiyd17"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btn}>Apply Now</button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692003384/java_internship_xny07b.svg"
            alt=""
          />
          <h2>Java Development Internship</h2>
          <p>
            Java is a versatile, powerful, and widely used programming language
            that is suitable for a wide range of applications. Whether you are a
            beginner or an experienced developer, learning Java can open up many
            opportunities and enhance your career prospects.
          </p>
          <a
            href="https://forms.gle/86fuQGkNqQsZiyd17"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btn}>Apply Now</button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692003384/android_internship_cfytt7.svg"
            alt=""
          />
          <h2>Android Development Internship</h2>
          <p>
            Android development is a dynamic and exciting field that offers a
            range of benefits for both developers and users. With its widespread
            popularity, powerful development tools, and opportunities for
            innovation, it is an excellent choice for those interested in a
            career in mobile app development.
          </p>
          <a
            href="https://forms.gle/86fuQGkNqQsZiyd17"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btn}>Apply Now</button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692003384/Cloud_internship_ln1wtj.svg"
            alt=""
          />
          <h2>Campus Ambassador Internship</h2>
          <p>
            A campus ambassador internship program is a marketing or outreach
            initiative that seeks to build brand awareness and promote products
            or services on college campuses. This program is an excellent
            opportunity for college students to gain professional experience,
            build their resumes, and make valuable connections in the industry.
          </p>
          <a
            href="https://forms.gle/86fuQGkNqQsZiyd17"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btn}>Apply Now</button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692003384/datascience_internship_kf9o0x.svg"
            alt=""
          />
          <h2>Data Science Internship</h2>
          <p>
            The goal of data science is to help organizations make better
            decisions by uncovering patterns, relationships, and trends in data.
            This can be used to improve processes, inform business strategies,
            or develop new products and services and knowledge in data science,
            and gain insight into the fields practices and trends.
          </p>
          <a
            href="https://forms.gle/86fuQGkNqQsZiyd17"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btn}>Apply Now</button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692003384/graphic_internship_ucygqz.svg"
            alt=""
          />
          <h2>Graphic Design Internship</h2>
          <p>
            We believe in the power of design to tell a story, solve problems,
            and connect people. Thats why weve created a virtual graphic design
            internship program to help students develop their skills and make
            their mark in the industry,develop skills in design while working on
            real-world projects
          </p>
          <a
            href="https://forms.gle/86fuQGkNqQsZiyd17"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btn}>Apply Now</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Internships;
