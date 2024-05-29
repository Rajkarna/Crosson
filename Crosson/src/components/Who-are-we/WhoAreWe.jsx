import React from "react";
import "./styles.scss";

const WhoAreWe = () => {
  return (
    <div className="container">
      <div>
        <p className="who-are-we">WHO ARE WE</p>
        <div className="sub-container">
          <div className="about-us">
            <h2 className="heading">
              Crosson is an international group <br />
              dedicated to the <span className="underline">food industry</span>.
            </h2>
            <div className="about-us-p">
              <p>
                Crosson has twenty years’ experience in food, quality,
                automation and software which has been established in the food
                sector for Research, Efficiency and Solution Production.
              </p>
              <p>
                It was not long to discover that supported to knowledge by
                scientific perspectives, would be the solution to the real needs
                of the sector.
              </p>
            </div>
            <div className="about">
              <div className="about-container">
                <button className="abt-btn">Our Products</button>
                <img className="icon" src="Icon.png" />
              </div>
              <div className="quality">Quality Certificates</div>
            </div>
          </div>
          <div className="list">
            <div className="verify">
              <div className="image">
                <img src="verified.png" />
              </div>
              <div>
                <h4>Exported to 24 Countries</h4>
                <p>168 companies in 24 countries use our machines</p>
              </div>
            </div>
            <div className="verify">
              <div className="image">
                <img src="honey.png" />
              </div>
              <div>
                <h4>8 Billion Products Per Day</h4>
                <p>8 billion products are produced daily from our machines.</p>
              </div>
            </div>
            <div className="verify">
              <div className="image">
                <img src="target.png" />
              </div>
              <div>
                <h4>We touch 850 million people a day</h4>
                <p>
                  850 million people use products made by their machines every
                  day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
