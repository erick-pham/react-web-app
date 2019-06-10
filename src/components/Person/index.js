import React, { Component } from "react";
import "./style.css";
export default class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="person-info">
        <h3>Person {this.props.person.personNo}:</h3>
        <ul>
          <li>First Name: {this.props.person.firstName}</li>
          <li>Last Name: {this.props.person.lastName}</li>
        </ul>
      </div>
    );
  }
}
