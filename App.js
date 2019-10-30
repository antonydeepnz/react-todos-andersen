import React, { Component } from 'react';
import './style.css';
import Todo from './components/Todo'
import Filter from './components/Filter'
import NewTodo from './components/NewTodo'
import Sort from './components/Sort'
import * as todoActions from './store/actions/todoActions'
import * as filterActions from './store/actions/filterActions'

import { connect } from 'react-redux'

const generateID = function () {
  return 'id-' + Math.random().toString(36).substr(2, 9);
};

class App extends Component {
  constructor() {
    super();
  }

  fillListWithData = () => {
    const todos = this.props.todos;
    const filter = this.props.filter;
    const filtered = this.props.todos.filter(item => {
        return item.text.toLowerCase().includes(filter.text) &&
          new Date(item.date) >= new Date(filter.dateFrom) &&
          new Date(item.date) <= new Date(filter.dateTo)});
    return filtered.map((item,index) => {
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

  sortByDate = (direction) => {
    this.props.onSortByDate(direction);
  }

  setFilter = (filterData) => {
    this.props.onSetFilter(filterData);
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
                func={this.sortByDate}/>       
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
    todos: state.todos,
    filter: state.filter
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
    onSetFilter: (state, filterData) => {
      dispatch(filterActions.setFilter(state, filterData))
    },
    onClear: () => {
      dispatch(filterActions.clearFilter())
    }
}))(App)