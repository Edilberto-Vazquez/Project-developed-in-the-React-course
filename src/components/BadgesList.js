import { Component } from "react";
import "./styles/BadgesList1.css";
import avatar from "../images/twitter.svg";

class BadgesList extends Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <div className="Badges-co-avatar">
                  <img src={badge.avatarUrl} alt="" />
                </div>
                <div className="Badges-co-user-info">
                  <p className="Badges-co-user-info__Name">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="Badges-co-user-info__twitter">
                    <img src={avatar} alt="" /> @{badge.twitter}
                  </p>
                  <p className="Badges-co-user-info__JobTitle">
                    {badge.jobTitle}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
