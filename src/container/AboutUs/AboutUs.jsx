import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant"> About Us</h1>
        <img src={images.spoon} className="spoon__img" alt="about_spoon" />
        <p className="p__opensans">
          Welcome to Gericht, where flavors come to life. Our chefs craft
          culinary wonders, blending tradition with innovation. Immerse yourself
          in our warm, inviting ambiance and savor extraordinary moments. Join
          us and let your taste buds dance to a symphony of taste and aroma.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant"> Our History</h1>
        <img src={images.spoon} className="spoon__img" alt="about_spoon" />
        <p className="p__opensans">
          Founded in 2023, Gerchit began as a humble vision. Over the years,
          we've evolved, staying true to our roots of exceptional cuisine and
          warm hospitality. Our journey is a testament to passion and
          dedication. Today, we stand as a cherished culinary destination,
          inviting you to share in our flavorful history.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
