import { useState } from "react";
// import { Router } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";
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
      <nav className={styles.right}>
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
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <NavLink to="/">HOME</NavLink>
            </li>
            <li
              className={({ isActive }) =>
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <NavLink to="/team">ABOUT</NavLink>
            </li>
            <li
              className={({ isActive }) =>
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <NavLink to="/">CAREER</NavLink>
            </li>
            <li
              className={({ isActive }) =>
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        {/* <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
