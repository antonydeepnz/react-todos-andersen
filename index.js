import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import defaultData from './defaultData'
import Todo from './components/Todo'
import Filter from './components/Filter'

  const generateID = function () {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  };

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount(){
    this.setState({todos: defaultData});
  }

  getDataFromLS = () => {
    for(let item of JSON.parse(localStorage.getItem('todos'))){
      //todoItemsArray.push(item);
    }
  }

  render() {
    return (
      <div>
        <Filter />
        <div className='todos-list'>
          {this.state.todos.map((item) => {
            return <Todo key={item.key}
                      text={item.text}
                      date={item.date} /> 
          })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
