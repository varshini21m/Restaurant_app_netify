import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's word" />
      <h1 className="headtext__cormorant">What we Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotes" />
          <p className="p__opensans">
            Where every dish tells a story of our belief in taste.
          </p>
        </div>
        <p className="p__opensans">
          At Gericht, we believe in creating a dining experience that tantalizes
          your taste buds and leaves you craving for more. Our passion for
          crafting exceptional dishes using the finest ingredients stems from a
          commitment to excellence. Join us on a culinary journey filled with
          flavors, aromas, and the joy of good company. Welcome to a place where
          every bite tells a story.
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
