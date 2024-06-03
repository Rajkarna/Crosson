import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="ftr-container">
      <div className="top-left-con">
        <div className="questions">
          <h4>Have a any questions?</h4>
          <h4>Contact Us</h4>
        </div>
        <div className="contactUs">
          <div>
            <img src="contactUs.png" />
          </div>
          <div>
            <p>Phone Number</p>
            <p className="para">+0(850) 544 7514 </p>
          </div>
        </div>
        <div className="contactUs">
          <div>
            <img src="mail.png" />
          </div>
          <div>
            <p> E-Mail Address</p>
            <p className="para">hello@crosson.com</p>
          </div>
        </div>
        <div className="contactUs">
          <div>
            <img src="location.png" />
          </div>
          <div className="headquarters">
            <p> Headquarters</p>
            <p className="para location">
              One Apple Park Way; Cupertino CA 95014, U.S.A.
            </p>
            <span>Get direction</span>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <div className="footer_list">
            <li>Products</li>
            <li>Filling Machines</li>
            <li>Bottle Filling</li>
            <li>Series Package</li>
            <li>Machines Linear</li>
            <li>Rotary Machines</li>
          </div>
          <div className="footer_list">
            <li>Solutions</li>
            <li>End of Line Solutions Machines Software </li>
            <li> Machines Software </li>
            <li>Research Solutions</li>
            <li>Conveyor Solutions</li>
            <li>Special Solutions Your Needs</li>
          </div>

          <div className="footer_list">
            <li>Products</li>
            <li>Filling Machines</li>
            <li>Bottle Filling</li>
            <li>Series Package</li>
            <li>Machines Linear</li>
            <li>Rotary Machines</li>
          </div>
        </div>

        <div className="footer_bottom_right">
          <div className="ladder_image">
            <img src="cloud_ladder.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
