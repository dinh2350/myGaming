import React, { Component } from "react";
import Header from "./components/Header.js";
import Carousel from "./components/Carousel.js";
import SmartPhones from "./components/SmartPhones.js";
import Footer from "./components/Footer.js";
export default class AppGaming extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />
        <SmartPhones />
        <Footer />
      </>
    );
  }
}
