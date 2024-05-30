import React from 'react'
import { experience } from './typography/typography'
import './typography/typography.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/slider';
import WhoAreWe from './components/Who-are-we/WhoAreWe';
import WhatWeDo from './components/What-we-do/WhatWeDo';
import './App.scss';


const App = () => {
  return (
    <>
    <div><Header /></div>
    <div><Slider/></div>
    <div><WhoAreWe/></div>
    <WhatWeDo/>

    </>
  )
}

export default App