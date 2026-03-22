import SubHeading from "../SubHeading/SubHeading";
import styles from "./Newsletter.module.css";

const Newsletter = () => (
  <div className={styles.newsletter}>
    <div className={styles.heading}>
      <SubHeading title="Newsletter" />
      <h2 className="heading">Subscribe To Our Newsletter</h2>
      <p className="opensans">And Never Miss Latest Updates!</p>
    </div>
    <div className={`${styles.input} flex__center`}>
      <input type="email" placeholder="Enter your e-mail address" />
      <button className="btn">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
