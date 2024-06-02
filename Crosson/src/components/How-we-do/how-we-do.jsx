import React from "react";
import "./style.scss"

const HowWeDo = () => {
    return (
        <div className="hwd-main">
            <div className="How-we-do-container">
                <p className="How-we-do ">How we do</p>
                <h4>A journey from design to product.</h4>
                <p className="hWD">Starting from the planning of the product our customer wants; design, manufacturing, software, mounting, installation & comissioning are made by us.</p>
            </div>
            <div className="Bottom-container">
                <div className="image">
                    <img className = "only-img"src='Image.png'/>
                    <h5>Product Design</h5>
                    <p>Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.</p>
                    <div className="read-more">
                    <button className="hwd-btn">Read more</button>
                    <img className="hwd-icon" src="Icon.png"/>
                    </div>
                </div>
                <div className="image">
                    <img className = "only-img"src='Image.png'/>
                    <h5>Product Design</h5>
                    <p>Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.</p>
                    <div className="read-more">
                    <button className="hwd-btn">Read more</button>
                    <img className="hwd-icon" src="Icon.png"/>
                    </div>
                </div>
                <div className="image">
                    <img className = "only-img"src='Image.png'/>
                    <h5>Product Design</h5>
                    <p>Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.</p>
                    <div className="read-more">
                    <button className="hwd-btn">Read more</button>
                    <img className="hwd-icon" src="Icon.png"/>
                    </div>
                </div>
            </div>
        </div>
    )}

    export default HowWeDo