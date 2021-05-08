import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeHome.css";
import logo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

class BadgeHome extends Component {
  render() {
    return (
      <Fragment>
        <div className="Badge-home">
          <div className="Badge-info">
            <img src={logo} alt="Logo de platzi conf" />
            <div className="Badge-title">
              <h1>PRINT YOUR BADGES</h1>
              <span>The easiest way to manage your conference</span>
            </div>
            <div className="Badge__button">
              <Link to="/badges" className="btn btn-primary">
                Start now
              </Link>
            </div>
          </div>
          <div className="Badge-astronauts">
            <img src={astronauts} alt="Astronautas" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeHome;
