import React, { Component } from 'react';
import './style.css';
import defaultData from './defaultData'
import Todo from './components/Todo'
import Filter from './components/Filter'
import NewTodo from './components/NewTodo'
import Sort from './components/Sort'
import * as todoActions from './store/actions/todoActions'

import { connect } from 'react-redux'

const generateID = function () {
  return 'id-' + Math.random().toString(36).substr(2, 9);
};

class App extends Component {
  constructor() {
    super();
  }

  fillListWithData = () => {
    return this.props.todos.map((item,index) => {
            return <Todo key={item.key}
                      text={item.text}
                      date={item.date}
                      checked={item.isComplete}
                      setChecked={() => this.setChecked.apply(this,[item.key])}
                      deleteItem={(event) => {this.deleteTodo.apply(this,[item.key,event])}} /> 
          })
  }

  addTodo = (value) => {
    const item = {
        key: generateID(), 
        text: value.text, 
        date: value.date, 
        isComplete: false};
    this.props.onAddTodo(item);
  }

  deleteTodo = (key, event) => {
    event.target.parentNode.style.display = 'none';
    this.props.onDeleteTodo(key);
  }

  setChecked = (key) => {
    this.props.onSetChecked(key);
  }

  sortByText = (direction) => {
    this.props.onSortByText(direction);
  }

  SortByDate = (direction) => {
    this.props.onSortByDate(direction);
  }

  setFilter = (data) => {
    this.props.onSetFilter(data);
  }

  clearFilter = () => {
    this.props.onClear();
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo}/>
        <Filter setFilter={this.setFilter}
                clear={this.clearFilter}/>
        <div className='sort-list'>
          <Sort title='Sort By Text'
                func={this.sortByText}/> 
          <Sort title='Sort By Date'
                func={this.SortByDate}/>       
        </div>
        <ul className='todos-list'>
          {this.fillListWithData()}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    onAddTodo: (todo) => {
      dispatch(todoActions.addTodo(todo))
    },
    onDeleteTodo: (key) => {
      dispatch(todoActions.deleteTodo(key))
    },
    onSetChecked: (key) => {
      dispatch(todoActions.setChecked(key))
    },
    onSortByText: (direction) => {
      dispatch(todoActions.sortByText(direction))
    },
    onSortByDate: (direction) => {
      dispatch(todoActions.sortByDate(direction))
    },
    onSetFilter: (data) => {
      dispatch({type: 'FILTER', payload: data})
    },
    onClear: () => {
      dispatch({type: 'CLEAR'})
    }
}))(App)