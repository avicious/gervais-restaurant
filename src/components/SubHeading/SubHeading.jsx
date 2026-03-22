import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon" />
  </div>
);

export default SubHeading;
