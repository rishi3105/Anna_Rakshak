import React from "react";

import { Carousel } from "react-responsive-carousel";
import {Waste1,Waste2,Waste3,Waste4, Aboutus } from "../../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel CSS


//import Aboutus from "../../images/aboutus.png"; // Import your image
import { } from "../css/WhatWeDo.css";

function WhatWeDo() {
    return (
        <section className="about">
          {/* About Us Heading */}
          <div className="about-heading">
            <h1>About Us</h1>
          </div>
    
          {/* Main Content Area */}
          <div className="about-container">
            {/* Upper Div: What We Do */}
            <div className="about-section">
              <div className="content-with-image"> 
                <div className="text-content">
                  <h2>What we do?</h2>
                  <p>
                    We're a platform connecting restaurants, households, and businesses
                    with local NGOs and food shelters. Our mission is to reduce food
                    waste and ensure that surplus food reaches those in need. We believe
                    that no one should go hungry when perfectly good food is being
                    discarded. By bridging the gap between those with excess food and
                    those who need it most, we're building a more sustainable and
                    compassionate community.
                  </p>
                  <h5>Join us in our mission to fight hunger and reduce food waste!!</h5>
                </div>
                <img src={Aboutus} alt="About Us Image" className="about-image" /> 
              </div>
            </div>
    
            {/* Lower Div: Food Wastage */}
            <div className="about-section food-wastage-section">
              <div className="content">
                <h2>Food Wastage!</h2>
                <p>
                  Did you know that about 84.3% of unused food in restaurants and
                  households ends up in the trash? Additionally, the hotel industry
                  produces 79,000 tons of food waste annually. This not only adds to
                  the growing concern about food waste in landfills but also
                  highlights a critical need for sustainable waste management in the
                  sector.
                </p>
              </div>
    
              {/* Carousel */}
              <div className="carousel-container">
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  interval={3000}
                  className="carousel"
                >
                  <div>
                    <img src={Waste1} alt="Food Waste 1" />
                  </div>
                  <div>
                    <img src={Waste2} alt="Food Waste 2" />
                  </div>
                  <div>
                    <img src={Waste3} alt="Food Waste 3" />
                  </div>
                  <div>
                    <img src={Waste4} alt="Food Waste 4" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      );
}

export default WhatWeDo;
