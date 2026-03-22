import styles from "./Chef.module.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg wrapper padding">
    <div className="wrapper-img wrapper-img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="wrapper-info">
      <SubHeading title="Chef's Word" />
      <h2 className="heading">What We Believe In</h2>

      <div className={styles.content}>
        <div className={styles.quote}>
          <img src={images.quote} alt="quote" />
          <p className="opensans">
            We believe that the foundation of excellence lies in
          </p>
        </div>
        <p className="opensans">
          the perfect harmony of seasonal integrity and meticulous
          craftsmanship. To us, every guest deserves an atmosphere where
          culinary artistry meets an unwavering commitment to genuine
          hospitality.
        </p>
      </div>

      <div className={styles.sign}>
        <p>Kevin Luo</p>
        <p className="opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
