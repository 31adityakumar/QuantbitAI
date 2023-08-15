import styles from "./Services.module.scss";
const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <h1 className={styles.head}>Our Services</h1>
        <div className={styles.subSection}>
        <div className={styles.content}>
          <h2>Website Development</h2>
          <p>Website development is the process of creating, designing, and building websites that provide an online
          presence for businesses, organizations, and individuals. The field has rapidly evolved with the advancement of
          technology, making it a dynamic and challenging field to work in. <br/>It is a field that is constantly
          evolving, providing a dynamic and challenging environment for those who are passionate about technology and
          design.
        </p>
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692000087/web_development_ehqfol.svg"
            alt=""
          />
        </div>
        </div>
        <div className={styles.subSection}>
        <div className={styles.content}>
          <h2>Java Programming</h2>
          <p>Java is one of the most widely used programming languages in the world and is used to develop a variety of
          applications, including desktop applications, web applications, mobile applications, and enterprise
          applications. <br/> Java is an object-oriented programming language, which makes it easier to build modular and
          reusable code, leading to more efficient and maintainable software. Java is a highly sought-after skill in the
          job market, and many companies are looking for Java developers. Learning Java can open up a variety of career
          opportunities in fields such as web development, mobile development, and enterprise software development.</p>
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692000086/java_programming_fwmhz2.svg"
            alt=""
          />
        </div>
        </div>
        <div className={styles.subSection}>
        <div className={styles.content}>
          <h2>Android Development</h2>
          <p>The field of Android development offers a wealth of exciting and rewarding opportunities for those with a
          passion for technology and problem-solving. Whether you are looking to create innovative apps, build
          cutting-edge devices, or develop software solutions that make a real difference in the world, a career in
          Android development has something to offer. <br/> Android development is an ever-evolving field, with new
          technologies, tools, and platforms emerging all the time. This means that you wll never get bored, and you wll
          always have the chance to learn new skills and tackle new challenges.
        </p>
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692000087/android_development_i3egvi.svg"
            alt=""
          />
        </div>
        </div>
        <div className={styles.subSection}>
        <div className={styles.content}>
          <h2>Database Management</h2>
          <p>Database management is a critical and in-demand field that offers a wealth of exciting career opportunities
          for those with the right skills and expertise. Whether you are interested in developing efficient and secure
          databases, analyzing complex data sets, or optimizing database performance, a career in database management
          has something to offer. <br/> Database management is a complex and challenging field that requires a
          combination of technical and analytical skills. Whether you are working with large data sets, designing complex
          database systems, or troubleshooting performance issues, you wll never get bored.
        </p>
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692000087/database_management_czxbzu.svg"
            alt=""
          />
        </div>
        </div>
        <div className={styles.subSection}>
        <div className={styles.content}>
          <h2>Machine Learning</h2>
          <p>Machine learning is a rapidly growing field that is transforming the way we live and work. From improving
          healthcare and financial services, to enhancing our ability to understand and predict complex phenomena,
          machine learning is playing an increasingly important role in shaping the future of technology. <br/> AI and ML
          algorithms can automate repetitive and time-consuming tasks, freeing up human workers to focus on more
          creative and strategic work.</p>
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692000087/machine_learning_ecjuwi.svg"
            alt=""
          />
        </div>
        </div>
      </section>
    </>
  );
};

export default Services;
