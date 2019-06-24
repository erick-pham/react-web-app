import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { forms: [] };
  }
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:5000/form-list');
      const forms = response.data;
      this.setState({ forms });

    } catch (error) {
      console.log(error);
    }
  }

  renderItem() {
    let { forms } = this.state;
    return forms.map((item, index) => {
      return (
        <div className="col-lg-3 col-md-4 col-6" key={index}>
          <div className="warraper-img">
            <p>{item.title || ''}</p>
            <img className="img-fluid img-thumbnail" src={item.thumbnailLink} alt="" />
            <div className="middle">
              <a href={item.editLink} className="badge badge-secondary text">Edit</a>
              <a href={item.publicLink} className="badge badge-secondary text">View</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>
        <hr className="mt-2 mb-5" />
        <div className="row text-center text-lg-left">
          {this.renderItem()}

        </div>
        <hr></hr>
        <div>
          <textarea value={JSON.stringify(this.state.forms)} style="width: 100%" />
        </div>
      </div>
    );
  }
}

