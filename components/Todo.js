import React, { Component } from 'react';
import '../styles/todo'

const Todo = (props) => {
  return(
    <li className={!props.checked? 'todo-item':'todo-item todo-item-complete'} >
      <div className='todo-text-wrapper'
            onClick={props.setChecked}>
        <Text text={props.text} />
        <Date date={props.date} />
      </div>
      <Delete click={props.deleteItem} />
    </li>
  );
}
 
export default Todo;

const Text = (props) => {
  return <p className="todo-item-text">{props.text}</p>
} 

const Date = (props) => {
  return <p className="todo-item-date">{props.date}</p>
}

const Delete = (props) => {
  return <span className="todo-item-delete" onClick={props.click}></span>
}
