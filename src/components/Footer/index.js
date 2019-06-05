import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">

                <li><a href=""><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                <li><a href=""><i className="fa fa-angle-double-right"></i>Videos</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void(0);"><i className="fa fa-angle-double-right"></i>Home</a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-angle-double-right"></i>About</a></li>

              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void(0);"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="javascript:void(0);"><i className="fa fa-google-plus"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void(0);" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
            </div>
          </div>
        </div >
      </section >
    );
  }
}
