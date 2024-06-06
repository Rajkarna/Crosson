import React from "react";
import "./contact.scss";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="breadCrum">
        <Link to="/" className="HomeBtn">
          Home
        </Link>
        <img src="Icon.png" />
        <p>Contact</p>
      </p>
      <h3>
        Interested in our <span className="underlinee">Machine & Software</span>
        services or need advice? Then please get in touch and we’ll be glad to
        help.
      </h3>
      <div className="cards">
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <div className="card-mgn">
                <h1>Contact Informations</h1>
                <p>Get in touch and let us know how we can help</p>
              </div>
              <div className="card-mgn">
                <h4>PHONE</h4>
                <p>+0(850) 544 7514</p>
              </div>
              <div className="card-mgn">
                <h4>MAIL</h4>
                <p>hello@crosson.com</p>
              </div>
              <div className="card-mgn">
                <h4>ADDRESS</h4>
                <p>One Apple Park Way; Cupertino CA 95014, U.S.A.</p>
              </div>
              <div className="direction">
                <div className="about-container">
                  <button className="abt-btn">Get direction</button>
                  <img className="icon" src="Icon.png" />
                </div>
                <div className="seemore"> See On Map</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-mgn">
                <h1>Technical Support</h1>
                <p>You can reach our technical support team 24/7</p>
              </div>
              <div className="card-mgn">
                <h4>SUPPORT PHONE</h4>
                <p>+0(850) 544 7514</p>
              </div>
              <div className="card-mgn">
                <h4>SUPPORT MAIL</h4>
                <p>hello@crosson.com</p>
              </div>
              <div className="card-mgn">
                <h4>SUPPORT REQUEST FORM</h4>
                <p>Caramels cake marshmallow cheesecake shortbread soufflé</p>
              </div>
              <div className="direction">
                <div className="about-container">
                  <button className="abt-btn">Request Form</button>
                  <img className="icon" src="Icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-mgn">
                <h1>Satisfaction Survey</h1>
                <p>Use the "Service Evaluation" code to make an evaluation</p>
              </div>
              <div className="card-mgn">
                <h4>WHERE IS MY CODE?</h4>
                <p>
                  The Service Evaluation code will be provided after the service
                  is performed by the technical team.
                </p>
              </div>
              <div className="card-mgnMax">
                <h4>SUPPORT MAIL</h4>
                <p>hello@crosson.com</p>
              </div>
              <div className="direction">
                <div className="about-container">
                  <button className="abt-btn">Rate Us</button>
                  <img className="icon" src="Icon.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
