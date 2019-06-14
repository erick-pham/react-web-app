import React, { Component } from 'react';

export default class Form extends Component {
  renderLevel = () => {
    let { arrayLevel } = this.props;
    return arrayLevel.map((level, index) => {
      switch (level) {
        case 0:
          return <option key={index} value={level}>Small</option>;
        case 1:
          return <option key={index} value={level}>Medium</option>;
        default:
          return <option key={index} value={level}>High</option>;
      }
    });
  }

  render() {
    if (this.props.showAddForm === false) { return null; }
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            {/* <label for="inputEmail4">Email</label> */}
            <input type="text"
              className="form-control"
              placeholder="Item Name"
              value={this.props.valueItem}
              onChange={(event) => this.props.handleFormInputChange(event.target.value)} />
          </div>
          <div className="form-group col-md-2">
            {/* <label for="inputPassword4">Password</label> */}
            <select className="form-control"
              value={this.props.levelItem}
              onChange={(event) => this.props.handleFormSelectChange(event.target.value)}>
              {this.renderLevel()}
            </select>
          </div>

          <div className="col-auto">
            <button type="button"
              className="btn btn-success mb-2"
              onClick={() => this.props.handleFormClickSubmit()}>Save</button>
            <span> </span>
            <button type="button"
              className="btn btn-secondary mb-2"
              onClick={() => this.props.handleFormClickCancel()}>Cancel</button>
          </div>
        </div>
      </form >
    );
  }
}
