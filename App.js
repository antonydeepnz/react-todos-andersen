import React, { Component } from 'react';
import './style.css';
import defaultData from './defaultData'
import Todo from './components/Todo'
import Filter from './components/Filter'
import NewTodo from './components/NewTodo'
import Sort from './components/Sort'

import { connect } from 'react-redux'

const generateID = function () {
  return 'id-' + Math.random().toString(36).substr(2, 9);
};

class App extends Component {
  constructor() {
    super();
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

  sortByText = ({target:{dataset}}) => {
    this.props.onSortByText(dataset.dir);
    dataset.dir == 'true'? dataset.dir = 'false': dataset.dir = 'true';  
  }

  SortByDate = ({target:{dataset}}) => {
    this.props.onSortByDate(dataset.dir);
    dataset.dir == 'true'? dataset.dir = 'false': dataset.dir = 'true';  
  }

  setFilter = () => {
    const data = {
      text: '' || '',
      dateFrom: '2019-10-01',
      dateTo: '2019-12-31'
    }
    this.props.onSetFilter(data);
  }

  clearFilter = () => {
    this.props.onClear();
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo.bind(this)}/>
        <Filter setFilter={this.setFilter.bind(this)}
                clear={this.clearFilter.bind(this)}/>
        <div className='sort-list'>
          <Sort title='Sort By Text'
                func={this.sortByText.bind(this)}/> 
          <Sort title='Sort By Date'
                func={this.SortByDate.bind(this)}/>       
        </div>
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
    todos: state.todos.filter(item => {
    return new Date(item.date) >= new Date(state.filter.dateFrom) &&
           new Date(item.date) <= new Date(state.filter.dateTo);
  }),
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
    },
    onSortByText: (dir) => {
      dispatch({type: 'SORT_BY_TEXT', payload: dir})
    },
    onSortByDate: (dir) => {
      dispatch({type: 'SORT_BY_DATE',  payload: dir})
    },
    onSetFilter: (data) => {
      dispatch({type: 'FILTER', payload: data})
    },
    onClear: () => {
      dispatch({type: 'CLEAR'})
    }
}))(App)