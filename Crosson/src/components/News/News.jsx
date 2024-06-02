import React from "react";
import "./News.scss";

const News = () => {
  return (
    <div className="wrapper">
      <div className="background"> </div>
      <div className="news_container">
        <div className="news_top_content">
          <h5>COMPANY NEWS</h5>
          <div className="news_title">
            News from <span className="underline">Crosson</span>
          </div>
          <div className="news_para">
            Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah
            sesame snaps chocolate cake gummies sugar plum cotton candy cupcake
            sweet
          </div>
        </div>

        <div className="news_bottom_content">
          <img src="news_image1.png" />
          <div className="news_bottom_text">
            <h5>Crosson Holding’s 58th ordinary general assembly convened</h5>
            <p>
              Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll
              halvah ice cream.
            </p>
            <button>
              Read more
              <span className="news_button_icon">
                <img src="news_button_icon.png" />
              </span>
            </button>
          </div>
          <img src="news_image2.png" />
          <div className="news_bottom_text">
            <h5>Crosson Holding’s 58th ordinary general assembly convened</h5>
            <p>
              Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll
              halvah ice cream.
            </p>
            <button>
              Read more
              <span className="news_button_icon">
                <img src="news_button_icon.png" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
