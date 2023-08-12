import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.containerContact}>
        <p className={styles.contactHeader}>
          Contact<span className={styles.infoGrad}> Info</span>
        </p>
        <div className={styles.credInfo}>
          <p className={styles.credItems}>
            Address
            <span className={styles.credText}>
              National Institute of Technology Silchar Cachar, Assam
            </span>
          </p>
          <p className={styles.credItems}>
            Website
            <span className={styles.credText}>
              <a href="https://www.quantbitai.in" target="blank">
                www.quantbitai.in
              </a>
            </span>
          </p>
          <p className={styles.credItems}>
            Email<span className={styles.credText}>quantbitai@gmail.com</span>
          </p>
          <p className={styles.credItemsphone}>
            Phone Number<span className={styles.credText}>+91-8252819394</span>
          </p>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.iconSection}>
          <a
            href="https://www.facebook.com/srijan.nits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className={styles.facebookIcon} />
          </a>
          <a
            href="https://www.instagram.com/srijan_nits/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className={styles.instaIcon} />
          </a>
          <a
            href="https://www.linkedin.com/company/srijan-nit-silchar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className={styles.linkedinIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
