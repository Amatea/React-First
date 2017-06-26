import React, { Component } from 'react';
import axios from 'axios'


class Faq extends Component {

  constructor(props) {
    super(props)

    this.state = {
      faqs: []
    }
  } 
    componentDidMount() {
      axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
          const faqs = res.data.slice(0,10);
          this.setState({ faqs })
        })
    }

  render() {
    return (
      <div>
        <div className="columns">
         {this.state.faqs.map(faq =>
           <div className="column is-one-third">
            <div className="card">
            <div clasName="card-content">
              <p className="title">{ faq.title }</p>
              <p className="answer">{ faq.body }</p>
            </div>
            </div>
           </div>
          )}
        </div>
      </div>
    );
  }
}

export default Faq;