import { useRef } from "react";
import styles from "./Gallery.module.css";
import { images } from "../../constants";
import { Camera, ArrowLeft, ArrowRight } from "lucide-react";

const imageArr = [
  { id: 1, img: images.gallery01 },
  { id: 2, img: images.gallery02 },
  { id: 3, img: images.gallery03 },
  { id: 4, img: images.gallery04 },
];

const Gallery = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={`${styles.gallery} flex__center`}>
      <div className={styles.content}>
        <h2 className="heading">Photo Gallery</h2>
        <p className="opensans" style={{ color: "#aaa", marginTop: "1rem" }}>
          A curated exploration of color, texture, and the precise architecture
          of modern gastronomy, where every ingredient is a brushstroke. Step
          inside a sanctuary of light and shadow, where the ambient glow and
          meticulous design set the stage for an unforgettable evening.
        </p>
        <button className="btn">View More</button>
      </div>

      <div className={styles.images}>
        <div className={styles.container} ref={scrollRef}>
          {imageArr.map(({ id, img }) => (
            <div key={id} className={`${styles.card} flex__center`}>
              <img src={img} alt="gallery" />
              <Camera className={styles.icon} />
            </div>
          ))}
        </div>
        <div className={styles.arrow}>
          <ArrowLeft
            size="2rem"
            className={styles.arrowIcon}
            onClick={() => scroll("left")}
          />
          <ArrowRight
            size="2rem"
            className={styles.arrowIcon}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
