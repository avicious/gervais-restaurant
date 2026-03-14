import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gervais} alt="" />
    </div>
  </nav>
);

export default Navbar;
