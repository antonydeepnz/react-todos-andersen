import React, { Component } from 'react';
import '../styles/filter'
import Input from './Input'

export default class Filter extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      dateFrom: '',
      dateTo: ''
    }
    this.queryChange = this.queryChange.bind(this);
  }

  queryChange = type => ({target: {value}}) => {
    this.setState({[type]: value});
    //console.log(this.state);
  }

  render(){
    return(
      <div className="filter-container">
        <h4>Apply filter</h4>  
        <span className='separator'></span>     
        <div>
          <Input className={'filter-item'}
               label={'Input text to search for'}
               change={this.queryChange('text')}/>
          <Input className={'filter-item'}
               label={'Select date search from'}
               type={'date'}
               change={this.queryChange('dateFrom')}/>
          <Input className={'filter-item'}
               label={'Select date search to'}
               type={'date'}
               change={this.queryChange('dateTo')}/>
        </div>
        <div></div>
      </div>
    );
  }
}
