import React, { Component, Fragment } from "react";
import "./styles/BadgeNew.css";
import logo from "../images/logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends Component {
  state = {
    form: { firstName: "", lastName: "", email: "", jobTitle: "", twitter: "" },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;
