import React, { Component } from 'react';
import '../styles/filter'
import Input from './Input'

export default class NewTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      date: ''
    }
  }

  onChange = type => ({target: {value}}) => {
    this.setState({[type]: value});
  }

  handleAdd = () => {
    this.props.addTodo(this.state);
  }

  render(){
    return(
      <div>
        <div>
          <Input className={''} 
              label='Input text of new todo'
              change={this.onChange('text')} 
              />
          <Input className={''} 
              label='Select date'
              type='date' 
              change={this.onChange('date')} />
        </div>
        <button onClick={this.handleAdd}>Add todo</button>
        <div>
        </div>
      </div>
    );
  }
}
