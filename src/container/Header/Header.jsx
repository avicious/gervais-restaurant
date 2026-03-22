import { images } from "../../constants";
import { SubHeading } from "../../components";
import styles from "./Header.module.css";

const Header = () => (
  <div className={`${styles.header} wrapper padding`} id="home">
    <div className="wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1>The Key to Fine Dining</h1>
      <p className="opensans" style={{ margin: "2rem 0" }}>
        Excellence. Precision. Passion. These are the pillars that transform a
        simple meal into a masterclass of flavor and atmosphere. Discover the
        nuances of modern gastronomy, where traditional techniques meet
        avant-garde presentation to redefine what it means to sit at the table.
      </p>
      <button className="btn">Explore Menu</button>
    </div>
    <div className="wrapper-img">
      <img className={styles.img} src={images.welcome} alt="food image" />
    </div>
  </div>
);

export default Header;
