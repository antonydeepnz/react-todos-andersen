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
    this.onChange = this.onChange.bind(this);
  }

  onChange = type => ({target: {value}}) => {
    this.setState({[type]: value});
  }

  add = () => {
    this.props.addTodo(this.state);
    const inputs = document.querySelectorAll('Input');
    inputs.forEach(item => item.value = '')
  }

  render(){
    return(
      <div>
        <div>
          <Input className={''} 
              label='Input text of new todo'
              change={this.onChange('text')} />
          <Input className={''} 
              label='Select date'
              type='date' 
              change={this.onChange('date')} />
        </div>
        <button onClick={this.add.bind(this)}>Add todo</button>
        <div>

        </div>
      </div>
    );
  }
}
