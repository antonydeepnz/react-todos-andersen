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

  render(){
    return(
      <div>
        <div>
          <Input className={''} 
              label={'Input text of new todo'} />
          <Input className={''} 
              label={'Select date'}
              type={'date'}/>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
