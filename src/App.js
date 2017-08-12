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
                      <hr/>
                      <div className="well well-lg">
                          <h3>Presentation template</h3>
                          <iframe title="Presentation template" src="https://docs.google.com/presentation/d/110TXbQeZNHnrmurJAgNAEBzGxJGlIHsY8mDrdsLRGYI/embed?start=false&loop=false&delayms=2000" frameBorder="0" width="480" height="299" allowFullScreen="true"></iframe>
                          <br/>
                          <button className="btn btn-primary" href="https://docs.google.com/presentation/d/110TXbQeZNHnrmurJAgNAEBzGxJGlIHsY8mDrdsLRGYI?usp=sharing">View here</button>
                      </div>
                      <hr/>
                      <h3>Email signup</h3>
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
