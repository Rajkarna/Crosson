import React from "react";
import { experience } from "./typography/typography";
import "./typography/typography.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/slider";
import WhoAreWe from "./components/Who-are-we/WhoAreWe";
import WhatWeDo from "./components/What-we-do/WhatWeDo";
import "./App.scss";
import Detail from "./components/Detail/Detail";
import HowWeDo from "./components/How-we-do/how-we-do";
import News from "./components/News/News";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Slider />
      </div>
      <div>
        <WhoAreWe />
      </div>
      <WhatWeDo />

      <Detail />
      <HowWeDo/>
    
      <News />
    </>
  );
};

export default App;
