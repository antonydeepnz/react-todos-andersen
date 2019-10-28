import React, { Component } from 'react';
import '../styles/filter'
import Input from './Input'

export default class NewTodo extends Component {
  constructor(){
    super();
   // this.textRef = React.createRef();
   // this.dateRef = React.createRef();
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
    this.textRef.value = '';
    this.dateRef.value = '';
  }

  render(){
    return(
      <div>
        <div>
          <Input className={''} 
              label='Input text of new todo'
              inputRef={el => this.textRef = el}
              change={this.onChange('text')} 
              />
          <Input className={''} 
              label='Select date'
              type='date'
              inputRef={el => this.dateRef = el}
              change={this.onChange('date')} />
        </div>
        <button onClick={this.handleAdd}>Add todo</button>
        <div>
        </div>
      </div>
    );
  }
}
