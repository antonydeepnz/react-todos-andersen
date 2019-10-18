import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import defaultData from './defaultData'
import Todo from './components/Todo'
import Filter from './components/Filter'
import NewTodo from './components/NewTodo'

const generateID = function () {
  return 'id-' + Math.random().toString(36).substr(2, 9);
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filteredTodos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.getDataFromLS = this.getDataFromLS.bind(this);
  }

  componentDidMount(){
    this.setState({todos: defaultData});
  }

  addTodo = (value) => {
    const item = {key: generateID(), text:value.text, date: value.date, isComplete: false}
    this.setState({todos: this.state.todos.concat(value)});
  }

  getDataFromLS = () => {
    for(let item of JSON.parse(localStorage.getItem('todos'))){
      //todoItemsArray.push(item);
    }
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo}/>
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
