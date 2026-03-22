import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import styles from "./Laurels.module.css";

const Laurels = () => (
  <div className="app__bg wrapper padding" id="awards">
    <div className="wrapper-info">
      <SubHeading title="Awards & Recognition" />
      <h2 className="heading">Our Laurels</h2>

      <div className={styles.awards}>
        {data.awards.map(({ id, imgUrl, title }) => (
          <div key={id} className={styles.card}>
            <img src={imgUrl} alt={title} />
            <div className={styles.content}>
              <p className="cormorant" style={{ color: "#dcca87" }}>
                {title}
              </p>
              {/* <p className="cormorant">{subtitle}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="wrapper-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
