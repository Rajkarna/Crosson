import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer_section">
    <div className="footer">
      <div className="footer_image"></div>
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

          <div className="footer_bottom_right_content">
            <h5>Career Opportunities</h5>
            <p>
              Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah
              sesame snaps.
            </p>
            <button>
              opening postions
              <span className="news_button_icon">
                <img src="news_button_icon.png" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr/>
  <div className="footer_last">
    <p>Copyright by Erkan Giris  |  All rights reserverd</p>
    <p>Our Privacy and Personal Data Protection Policy  |   Terms and Conditions of Use</p>
  </div>
  </div>
  );
};

export default Footer;
