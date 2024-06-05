import React from "react";

import "./typography/typography.scss";
import Header from "./components/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
