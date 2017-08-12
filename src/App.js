import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center header">
                      <h1>Lightning Talks</h1>
                      <p className="lead">5–10 minute actionable presentations on interesting topics</p>
                      <h2><span role="img" aria-label="Lightning and thought bubble">⚡💭</span></h2>
                      <hr />
                          <p>Signup below to stay informed</p>
                          <div>
                              <iframe title="Email signup form" src="https://docs.google.com/forms/d/e/1FAIpQLSd7dJo--jthVKj5RuWw2QIdACq5znJfsh5j2rpYsdocz8VXVA/viewform?embedded=true" width="320" height="720" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
                          </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
