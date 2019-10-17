import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
