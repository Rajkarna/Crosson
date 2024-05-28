import React from "react";
import "./slider.scss";

const Slider = () => {
  return (
    <>
    <div className="slider-container">
      <img className="slider-img" src="Slider-Bg.png" />
      <div className="slider-text">
        <div className="text-1">
          We make Filling & Packaging
          <br />
          Machines for Food Industry
        </div>
        <div className="text-2">
          With our flexible production capacity and high technology, we produce
          <br /> customized solutions for your needs.
        </div>
        <div className="product">
          <div className="btn-container">
            <button className="btn">Our Products</button>
            <img className="icon" src="Icon.png" />
          </div>
          <div className="sales">
            <img src="contact.png" />
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Slider;
