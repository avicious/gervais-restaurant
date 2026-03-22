import { images } from "../../constants";
import styles from "./AboutUs.module.css";

const AboutUs = () => (
  <div
    className={`${styles.container} app__bg flex__center padding`}
    id="about"
  >
    <div className={`${styles.overlay} flex__center`}>
      <img src={images.G} alt="letter g" />
    </div>

    <div className={`${styles.content} flex__center`}>
      <div className={styles.about}>
        <h2 className="heading">About Us</h2>
        <img src={images.spoon} alt="spoon" className="spoon" />
        <p className="opensans">
          Founded on a commitment to culinary excellence, we curate immersive
          dining experiences that celebrate the art of the seasonal harvest. Our
          philosophy blends time-honored techniques with contemporary
          innovation.
        </p>
        <button className="btn">Know More</button>
      </div>

      <div className={`${styles.knife} flex__center`}>
        <img src={images.knife} alt="knife" />
      </div>

      <div className={styles.history}>
        <h2 className="heading">Our History</h2>
        <img src={images.spoon} alt="spoon" className="spoon" />
        <p className="opensans">
          Our story started with a simple passion for seasonal ingredients and
          the transformative power of a shared meal. What began as a bold
          experimental kitchen has grown into an industry-leading destination
          for modern fine dining.
        </p>
        <button className="btn">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
