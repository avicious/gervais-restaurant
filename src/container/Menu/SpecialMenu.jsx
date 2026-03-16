import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palette" />
      <h2 className="headtext__cormorant">Today's Special</h2>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine) => (
            <MenuItem key={wine.id} {...wine} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktail</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail) => (
            <MenuItem key={cocktail.id} {...cocktail} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
