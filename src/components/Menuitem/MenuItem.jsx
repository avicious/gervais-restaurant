import styles from "./MenuItem.module.css";

const MenuItem = ({ title, price, tags }) => (
  <div className={styles.menu}>
    <div className={styles.head}>
      <div className={styles.name}>
        <p className="cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
      </div>

      <div className={styles.dash} />

      <div className={styles.price}>
        <p className="cormorant">{price}</p>
      </div>
    </div>

    <div className={styles.sub}>
      <p className="opensans" style={{ color: "#aaa" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
