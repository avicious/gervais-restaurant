import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className={`${styles.footer} padding`}>
    <FooterOverlay />
    <Newsletter />

    <div className={styles.links}>
      <div className="app__footer-links_contact">
        <h3 className={styles.heading}>Contact Us</h3>
        <p className="opensans">9 W 53rd St New York, NY 10019, USA</p>
        <p className="opensans">+1 212-344-1230</p>
        <p className="opensans">+1 212-555-1230</p>
      </div>
      <div className={styles.logo}>
        <img src={images.gervais} alt="gervais" />
        <img src={images.spoon} alt="spoon" style={{ marginBottom: 15 }} />
        <p className="opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
      </div>
      <div className={styles.work}>
        <h3 className={styles.heading}>Working Hours</h3>
        <p className="opensans">
          Monday - Friday: <br />
          08:00 am - 12:00 am
        </p>
        <p className="opensans">
          Saturday - Sunday: <br />
          07:00 am - 11:00 pm
        </p>
      </div>
    </div>

    <div className={styles.copyright}>
      <p className="opensans">2026 Gervais. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
