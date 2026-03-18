import { images } from "../../constants";
import { Camera, ArrowLeft, ArrowRight } from "lucide-react";
import "./Gallery.css";
import { useRef } from "react";

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
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h2 className="headtext__cormorant">Photo Gallery</h2>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "1rem" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          aliquam explicabo quos exercitationem odit at vitae omnis quis laborum
          quaerat! Molestiae eos consequuntur praesentium non accusamus quos
          nostrum hic nihil.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imageArr.map(({ id, img }) => (
            <div key={id} className="app__gallery-images_card flex__center">
              <img src={img} alt="gallery" />
              <Camera className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <ArrowLeft
            size="2rem"
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <ArrowRight
            size="2rem"
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
