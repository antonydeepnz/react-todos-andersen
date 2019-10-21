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
  }

  addTodo = (value) => {
    const item = {key: generateID(), text: value.text, date: value.date, isComplete: false};
    this.props.onAddTodo(item);
  }

  deleteTodo = (key, event) => {
    event.target.parentNode.style.display = 'none';
    this.props.onDeleteTodo(key);
  }

  setChecked = (key) => {
    this.props.onSetChecked(key);
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo.bind(this)}/>
        <Filter />
        <ul className='todos-list'>
          {this.props.todos.map((item,index) => {
            return <Todo key={item.key}
                      text={item.text}
                      date={item.date}
                      checked={item.isComplete}
                      setChecked={() => this.setChecked.apply(this,[item.key])}
                      deleteItem={(event) => {this.deleteTodo.apply(this,[item.key,event])}} /> 
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos,
    filtered: state.filtered
  }),
  dispatch => ({
    onAddTodo: (todo) => {
      dispatch({type: 'ADD_TODO', payload: todo})
    },
    onDeleteTodo: (key) => {
      dispatch({type: 'DELETE_TODO', payload: key})
    },
    onSetChecked: (key) => {
      dispatch({type: 'SET_CHECKED', payload: key})
    }
  })
)(App)

