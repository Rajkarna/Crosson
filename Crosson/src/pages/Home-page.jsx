import React from "react";
import Slider from "../components/Slider/slider";
import WhoAreWe from "../components/Who-are-we/WhoAreWe";
import WhatWeDo from "../components/What-we-do/WhatWeDo";
import Detail from "../components/Detail/Detail";
import HowWeDo from "../components/How-we-do/how-we-do";
import News from "../components/News/News";

const Home=()=>{
    return (
      <>
        <Slider />
        <WhoAreWe />
        <WhatWeDo />
        <Detail />
        <HowWeDo />
        <News />
      </>
    );
}

export default Home