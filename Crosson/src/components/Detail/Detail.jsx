import React from "react";
import "./styles.scss";

const Detail = () => {
  return (
    <div className="detail_container">
      <div className="detail_left_container">
        <div className="left_top">
          <h4>Filling and Packaging Machines</h4>
          <p className="detail_matter">
            Liquorice lemon drops powder chocolate liquorice candy dessert gummi
            bears. Caramels marzipan donut jujubes sweet roll. Powder croissant
            toffee shortbread chocolate sweet pie.
          </p>
        </div>

        <div className="detail_images">
          <div>
            <img src="linear_machines.png" />
            <p>linear machines</p>
          </div>

          <div>
            <img src="linear_machines.png" />
            <p>linear machines</p>
          </div>

          <div>
            <img src="linear_machines.png" />
            <p>linear machines</p>
          </div>
        </div>
      </div>

      <div className="detail_right_container">
        <div className="detail_right_top">
          <div className="left_top">
            <h5>Let's Plan an Online Meeting</h5>
            <p>We are Available Now</p>
          </div>
          <img src="calender.png" />
        </div>

        {/* <div className="detail_right_top">
          <div className="left_top">
            <h5>Let's Plan an Online Meeting</h5>
            <p>We are Available Now</p>
          </div>
          <img src="calender.png" />
        </div>

        <div className="detail_right_top">
          <div className="left_top">
            <h5>Let's Plan an Online Meeting</h5>
            <p>We are Available Now</p>
          </div>
          <img src="calender.png" />
        </div> */}
      </div>
    </div>
  );
};

export default Detail;
