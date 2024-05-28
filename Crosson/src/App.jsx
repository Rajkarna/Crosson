import React from 'react'
import { experience } from './typography/typography'
import './typography/typography.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/slider';
import WhoAreWe from './components/Who-are-we/WhoAreWe';


const App = () => {
  return (
    <>
    <div><Header /></div>
    <div><Slider/></div>
    <div><WhoAreWe/></div>

    </>
  )
}

export default App