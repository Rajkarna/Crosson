import React from "react";
import "./styles.scss";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <div className="top-container">
        <div className="left-container">
          <h3>What We Do</h3>
          <p>
            With our flexible production capacity and high technology, we&nbsp;
            <span className="underline"> produce customized</span> solutions for
            your needs.
          </p>
        </div>

        <div className="right-container">
          <img src="Icon1.png" />
          <div className="text_content">
            <p className="text_content__name">
              Watch Our Machines
              <div className="text_content__time">2.34Min, 14.7MB</div>
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="icons_text">
          <img src="Filling.png" />
          <p>Filling and Packaging Machines</p>
        </div>

        <div className="icons_text">
          <img src="End_of_line.png" />
          <p>Filling and Packaging Machines</p>
        </div>

        <div className="icons_text">
          <img src="Food_industry.png" />
          <p>Filling and Packaging Machines</p>
        </div>

        <div className="icons_text">
          <img src="Technical.png" />
          <p>Filling and Packaging Machines</p>
        </div>

        <div className="icons_text">
          <img src="special.png" />
          <p>Filling and Packaging Machines</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
