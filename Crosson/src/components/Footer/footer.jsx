import React from "react";
import './style.scss'


const Footer=()=>{
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
          <p >Phone Number</p>
          <p className="para">+0(850) 544 7514 </p >
        </div>
      </div>
      <div className="contactUs">
        <div>
          <img src="mail.png" />
        </div>
        <div>
          <p> E-Mail Address</p>
          <p className="para">hello@crosson.com</p >
        </div>
      </div>
      <div className="contactUs">
        <div>
          <img src="location.png" />
        </div>
        <div>
          <p > Headquarters</p>
          <p className="para location">One Apple Park Way; Cupertino CA 95014, U.S.A.</p >
        </div>
      </div>
    </div>
  </div>
);
}

export default Footer