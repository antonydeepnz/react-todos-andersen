import React, { Component } from 'react';
import '../styles/todo'

export default class Todo extends Component {
  constructor(){
    super();
    this.state = {
      checked: false
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.classNameChange = this.classNameChange.bind(this);
    this.getCheckedState = this.getCheckedState.bind(this);
  }

  componentDidMount(){
    this.setState({checked: this.props.checked})
  }

  deleteItem = (event) => {
    event.target.parentNode.style.display = 'none';
  }

  classNameChange = (normal, changed) => {
    return !this.state.checked? normal: changed;
  } 

  markComplete = () => {
    this.setState({checked: !this.state.checked});
  }

  getCheckedState = () => {

  }

  render(){
    return(
      <li className={this.classNameChange('todo-item', 'todo-item todo-item-complete')}
          onClick={this.markComplete}>
        <Text className={this.classNameChange('todo-item-text', 'todo-item-text-complete') }
              text={this.props.text} />
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
  return <span className="todo-item-delete" onClick={props.click}>&#x2716</span>
}