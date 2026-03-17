import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper__img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper__info">
      <SubHeading title="Chef's Word" />
      <h2 className="headtext__cormorant">What We Believe In</h2>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Quod sapiente rerum alias sed accusamus itaque beatae quo voluptatem
          suscipit iure assumenda recusandae sequi nobis soluta voluptas labore,
          cumque nostrum asperiores!
        </p>
      </div>
      
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
