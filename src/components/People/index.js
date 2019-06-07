import React, { Component } from "react";
import Person from "../Person";
import "./style.css";
export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props.people
    };
  }
  // Use the render function to return JSX component
  render() {
    return (
      <div className="people">
        <div className="row">
          {this.state.people.map((element, i) => {
            return (
              <div key={i} className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                <Person person={element} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
