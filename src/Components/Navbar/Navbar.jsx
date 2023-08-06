import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Navbar.module.scss";
import Data from "../../assets/Data.json";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeToggle);
  return (
    <div
      className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}
    >
      <section className={styles.left}>
        {Data.map((data) => {
          return (
            <div className={styles.logoPart} key={data.id}>
              <a href="/">
                <img src={data.logo} />
              </a>
            </div>
          );
        })}
      </section>
      <section className={styles.right}>
        <button className={styles.toggleIcon} onClick={handleToggle}>
          {toggle ? (
            <Icon icon="basil:cross-outline" height="40" />
          ) : (
            <Icon icon="ci:hamburger-md" height="40" />
          )}
        </button>
        <ul className={styles.links}>
          <li
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
          >
            <a to="/">HOME</a>
          </li>
          <li
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
          >
            <a to="/">ABOUT</a>
          </li>
          <li
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
          >
            <a to="/">SERVICES</a>
          </li>
          <li
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
          >
            <a to="#">CONTACT US</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
