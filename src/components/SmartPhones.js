import React, { Component } from "react";
import SmartPhone from "./SmartPhone.js";
export default class SmartPhones extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <SmartPhone
            image="./img/sp_iphoneX.png"
            name="Galaxy Note7"
            description="iPhone X features a new all-screen design. Face ID, which
                    makes your face your password"
          />
          <SmartPhone
            image="./img/sp_note7.png"
            name="iPhone X"
            description="The Galaxy Note7 comes with a perfectly symmetrical design
                    for good reason"
          />
          <SmartPhone
            image="./img/sp_vivo850.png"
            name="Vivo"
            description=" A young global smartphone brand focusing on introducing
                    perfect sound quality"
          />
          <SmartPhone
            image="./img/sp_blackberry.png"
            name="Blackberry"
            description="BlackBerry is a line of smartphones, tablets, and services
                    originally designed"
          />
        </div>
      </section>
    );
  }
}
