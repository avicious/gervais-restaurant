import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h3 className="app__footer-headtext">Contact Us</h3>
        <p className="p__opensans">9 W 53rd St New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gervais} alt="gervais" />
        <img src={images.spoon} alt="spoon" style={{ marginBottom: 15 }} />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
      </div>
      <div className="app__footer-links_work">
        <h3 className="app__footer-headtext">Working Hours</h3>
        <p className="p__opensans">
          Monday - Friday: <br />
          08:00 am - 12:00 am
        </p>
        <p className="p__opensans">
          Saturday - Sunday: <br />
          07:00 am - 11:00 pm
        </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2026 Gervais. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
