import { useState } from "react";
import { Menu, UtensilsCrossed } from "lucide-react";

import styles from "./Navbar.module.css";

import { images, data } from "../../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={images.gervais} alt="gervais logo" />
      </div>

      <ul className={styles.links}>
        {data.navLinks.map(({ id, link }) => (
          <li key={id} className="sans">
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className={styles.login}>
        <a href="/" className="sans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="sans">
          Book Table
        </a>
      </div>

      <div className={styles.mobile}>
        <Menu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className={`${styles.mobileOverlay} flex__center slide-bottom`}>
            <UtensilsCrossed
              className={styles.close}
              color="#dcca87"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className={styles.mobileLinks}>
              {data.navLinks.map(({ id, link }) => (
                <li key={id} className="sans">
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
