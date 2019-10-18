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
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  submit = () => {
    console.log(`${this.state.text} + ${this.state.date}`);
  }

  onChange = type => ({target: {value}}) => {
    this.setState({[type]: value});
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
        <button onClick={() => {this.props.addTodo(this.state)}}>Add todo</button>
        <div>

        </div>
      </div>
    );
  }
}
