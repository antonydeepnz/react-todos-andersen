import React, { Component } from 'react';
import '../styles/filter'

export default class NewTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      date: ''
    }
  }

  render(){
    return(
      <div>
        <div>
          <Input label={'Input text of new '} />
          <div className=''>
            <label>Input text to search for</label>
            <input type='text' onChange={}/>
          </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

const Input = (props) => {
  return (
    <div className=''>
      <label>{props.label}</label>
      <input type={props.type} onChange={}/>
    </div>
  );
}