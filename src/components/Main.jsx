import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import NavigateButtons from "./NavigateButtons";
import ProductSection from "./ProductSection";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigateButtons></NavigateButtons>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;