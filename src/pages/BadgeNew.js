import React, { Component } from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import logo from "../images/logo.svg";
import Badge from "../components/Badge";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Edilberto"
                lastName="Vazquez"
                jobTitle="Systems and IT engineer"
                twitter="No tengo Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
