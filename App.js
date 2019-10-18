import React, { Component } from 'react';
import './style.css';
import defaultData from './defaultData'
import Todo from './components/Todo'
import Filter from './components/Filter'
import NewTodo from './components/NewTodo'

import { connect } from 'react-redux'

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
    //this.addTodo = this.addTodo.bind(this);
    //this.getDataFromLS = this.getDataFromLS.bind(this);
    //this.setDataToLS = this.setDataToLS.bind(this);
  }

/*
  addTodo = (value) => {
    const item = {key: generateID(), text:value.text, date: value.date, isComplete: false}
    this.setState(prevState => ({todos: [...prevState.todos,item]}));
    console.log(this.state.todos);
    this.setDataToLS();
    console.log(localStorage);
  }
*/
  addTodo = (value) => {
    const item = {key: generateID(), text: value.text, date: value.date, isComplete: false};
    this.props.onAddTodo(value);
  }
/*
  getDataFromLS = () => {
    const data = JSON.parse(localStorage.getItem('react-todo'));
    this.setState({todos: [...data]});
  }

  setDataToLS = () => {
    localStorage.setItem('react-todo', JSON.stringify(this.state.todos));
  }
*/
  deleteTodo = (event) => {
    event.target.parentNode.style.display = 'none';
    this.props.onDeleteTodo('dsfdsfdf');
  }

  render() {
    console.log(this.props.another)
    return (
      <div>
        <NewTodo addTodo={this.addTodo.bind(this)}/>
        <Filter />
        <ul className='todos-list'>
          {this.props.todos.map((item) => {
            return <Todo key={item.key}
                      text={item.text}
                      date={item.date}
                      checked={item.isComplete}
                      deleteItem={this.deleteTodo.bind(this)} /> 
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos,
    another: state.another
  }),
  dispatch => ({
    onAddTodo: (todo) => {
      dispatch({type: 'ADD_TODO', payload: todo})
    },
    onDeleteTodo: (val) => {
      dispatch({type: 'DELETE_TODO', payload: val})
    },
    onSetChecked: (key) => {
      dispatch({type: 'SET_CHECKED', payload: key})
    }
  })
)(App)
