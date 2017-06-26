import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {

    let heading = "Soaring to new heights"
    let subheading = "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed"

    return (
      <div>
        <section className="Hero">
          <div className="hero-body">
            <div className="container">
            <h1 className="title">{ heading }</h1>
            <div className="is-two-thirds column is-paddinggless">
              <h2 className="subtitle is-4">{subheading}</h2>
            </div>
              <a className="button is-large is-primary" id="learn">Learn more</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;