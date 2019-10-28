import React, { useRef } from 'react';
import '../styles/filter'
import Input from './Input'

const Filter = (props) => {
  const textRef = useRef(null);
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  const click = () => {
    const filterData = {
      text: textRef.current.value,
      dateFrom: dateFromRef.current.value,
      dateTo: dateToRef.current.value 
    }
    props.setFilter(filterData);
  }

  const clear = () => {
    textRef.current.value = '';
    dateFromRef.current.value = '';
    dateToRef.current.value = '';
    //props.setFilter(this.state);
  }

  return (
    <div className="filter-container">
        <h4>Apply filter</h4>  
        <span className='separator'></span>     
        <div>
          <Input className='filter-item'
               label='Input text to search for'
               inputRef={textRef} />
          <Input className='filter-item'
               label='Select date search from'
               type='date'
               inputRef={dateFromRef} />
          <Input className='filter-item'
               label='Select date search to'
               type='date'
               inputRef={dateToRef} />
        </div>
        <div className='filter-buttons'>
          <a onClick={click}>Filter</a>
          <a onClick={props.clear}>Clear</a> 
        </div>
      </div>
  ); 
}

export default Filter;