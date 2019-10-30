import React, { useState } from 'react';
import '../styles/sort'

const Sort = (props) => {
  const [direction, setDirection] = useState(true);
  return(
    <>
      <a className="sort-btn"
        onClick={() => {
          setDirection(!direction); 
          props.func(direction)
        }}>
        {props.title}</a>
    </>
  );
}

export default Sort;