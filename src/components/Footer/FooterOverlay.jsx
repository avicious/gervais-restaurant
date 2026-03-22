import styles from './FooterOverlay.module.css';

const FooterOverlay = () => (
  <div className={styles.overlay}>
    <div className={styles.black} />
    <div className={`${styles.image} app__bg`} />
  </div>
);

export default FooterOverlay;
