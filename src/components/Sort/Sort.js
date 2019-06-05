import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sort extends Component {
  renderSort = () => {
    let { sortType, sortOrder } = this.props;
    if (sortType !== '' && sortOrder !== '') {
      return (
        <span className="label label-success label-medium text-uppercase">
          {sortType} - {sortOrder}
        </span>
      )
    }
  }

  handleClick = (sortType, sortOrder) => {
    this.props.handleSort(sortType, sortOrder);
  }

  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu" id="dropdownMenu1">
          <li onClick={() => this.handleClick('name', 'asc')}>
            < Link to="#" role="button" className="text-uppercase">NAME ASC</Link>
          </li>
          <li onClick={() => this.handleClick('name', 'desc')}>
            <Link to="#" role="button" className="text-uppercase">Name DESC</Link>
          </li>
          <li role="separator" className="divider"></li>
          <li onClick={() => this.handleClick('level', 'asc')}>
            <Link to="#" role="button" className="text-uppercase">Level ASC</Link>
          </li>
          <li onClick={() => this.handleClick('level', 'desc')}>
            <Link to="#" role="button" className="text-uppercase">Level DESC</Link>
          </li>
        </ul>
        <span className="label label-success label-medium">NAME - DESC</span>
        {this.renderSort()}
      </div >
    )
  }
}

export default Sort;
