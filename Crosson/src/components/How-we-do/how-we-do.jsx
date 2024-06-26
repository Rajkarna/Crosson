import React from "react";
import "./style.scss"

const HowWeDo = () => {
    return (
        <div className="hwd-main">
            <div className="How-we-do-container">
                <p className="How-we-do ">HOW WE DO</p>
                <h4>A journey from <span className="underline">design to product.</span></h4>
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
                    <img className = "only-img"src='Image (1).png'/>
                    <h5>Planing & Production</h5>
                    <p>Center we have
developped many patents in filling and packaging technology.</p>
                    <div className="read-more">
                    <button className="hwd-btn">Read more</button>
                    <img className="hwd-icon" src="Icon.png"/>
                    </div>
                </div>
                <div className="image">
                    <img className = "only-img"src='Image (2).png'/>
                    <h5>Installation & Comisioning</h5>
                    <p>Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears. </p>
                    <div className="read-more">
                    <button className="hwd-btn">Read more</button>
                    <img className="hwd-icon" src="Icon.png"/>
                    </div>
                </div>
            </div>
        </div>
    )}

    export default HowWeDo