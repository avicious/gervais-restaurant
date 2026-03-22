import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import styles from "./SpecialMenu.module.css";

const SpecialMenu = () => (
  <div className={`${styles.container} flex__center padding`} id="menu">
    <div className={styles.textAlign}>
      <SubHeading title="Menu That Fits Your Palette" />
      <h2 className="heading">Today's Special</h2>
    </div>

    <div className={styles.menu}>
      <div className={`${styles.wine} flex__center`}>
        <p className={styles.title}>Wine & Beer</p>
        <div className={styles.items}>
          {data.wines.map((wine) => (
            <MenuItem key={wine.id} {...wine} />
          ))}
        </div>
      </div>

      <div className={styles.image}>
        <img src={images.menu} alt="menu" />
      </div>

      <div className={`${styles.cocktail} flex__center`}>
        <p className={styles.title}>Cocktail</p>
        <div className={styles.items}>
          {data.cocktails.map((cocktail) => (
            <MenuItem key={cocktail.id} {...cocktail} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button className="btn">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
