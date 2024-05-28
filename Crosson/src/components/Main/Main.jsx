import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <div className="contact">
        <img src="contact.png" />
      </div>

      <div className="title">Crosson</div>

      <div className="social-container">
        <div className="social-media">
          <img src="social-media.png" />
        </div>

        <div className="language">
          <img src="language.png" />
        </div>
      </div>
    </div>
  );
};

export default Main;
