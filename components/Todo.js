import React, { Component } from 'react';
import '../styles/todo'

export default class Todo extends Component {
  constructor(){
    super();
    this.state = {
      checked: false
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem = (event) => {
    console.log('delete');
  }

  generateID = function () {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  };

  render(){
    return(
      <li className="todo-item">
        <Text text={this.props.text} />
        <Date date={this.props.date} />
        <Delete click={this.deleteItem} />
      </li>
    );
  }
}

const Date = (props) => {
  return <p className="todo-item-date">{props.date}</p>
}

const Text = (props) => {
  return <p className="todo-item-text">{props.text}</p>
} 

const Delete = (props) => {
  return <span className="todo-item-delete" onClick={props.click}>X</span>
}