import React, { Component } from 'react';

const Input = (props) => {
  return (
    <div className={props.className}>
      {props.label? 
          <label>{props.label}</label>:
          ''}
      <input type={props.type} onChange={props.change}/>
    </div>
  );
}


export default Input;