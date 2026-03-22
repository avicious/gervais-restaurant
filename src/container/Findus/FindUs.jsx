import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg wrapper padding" id="contact">
    <div className="wrapper-info">
      <SubHeading title="Contact" />
      <h2 className="heading" style={{ marginBottom: "3rem" }}>
        Find Us
      </h2>
      <div>
        <p className="opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p className="cormorant" style={{ color: "#dcca87", margin: "2rem 0" }}>
          Opening Hours
        </p>
        <p className="opensans">Mon - Fri: 10:00 am - 10:00 pm</p>
        <p className="opensans">Sat - Sun: 09:00 am - 09:00 pm</p>
      </div>

      <button className="btn" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>
    <div className="wrapper-img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
