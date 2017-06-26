import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer is-primary">
          <div className="container">
            <div className="columns">
            <div className="column">
              <p>And this right here is a spiffy footer, where you can put stuff</p>
            </div>
            <div className="column has-text-right">
              <a className="icon" href="#"></a>
              <a className="icon" href="#"></a>
            </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;