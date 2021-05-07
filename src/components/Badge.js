import React, { Component } from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends Component {
  render() {
    const { firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="Badge-co">
        <div className="Badge-co__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge-co__section-name">
          <img
            className="Badge-co__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>
        <div className="Badge-co__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div className="Badge-co__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
