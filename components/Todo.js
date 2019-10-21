import React, { Component } from 'react';
import '../styles/todo'

export default class Todo extends Component {
  constructor(){
    super();
    this.state = {
      checked: false
    }
    this.markComplete = this.markComplete.bind(this);
    this.classNameChange = this.classNameChange.bind(this);
  }

  componentDidMount(){
    this.setState({checked: this.props.checked})
  }

  classNameChange = (normal, changed) => {
    return !this.state.checked? normal: changed;
  } 

  markComplete = () => {
    //this.setState({checked: !this.state.checked});
    //this.props.setChecked(key)
  }

  render(){
    return(
      <li className={this.classNameChange('todo-item', 'todo-item todo-item-complete')} >
        <div className='todo-text-wrapper'
             onClick={this.props.setChecked}>
          <Text text={this.props.text} />
          <Date date={this.props.date} />
        </div>
        <Delete click={this.props.deleteItem} />
      </li>
    );
  }
}


const Text = (props) => {
  return <p className="todo-item-text">{props.text}</p>
} 

const Date = (props) => {
  return <p className="todo-item-date">{props.date}</p>
}

const Delete = (props) => {
  return <span className="todo-item-delete" onClick={props.click}></span>
}