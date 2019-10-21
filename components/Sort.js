import React from 'react';
import '../styles/sort'

const Sort = (props) => {
  return(
    <>
      <a className="sort-btn"
        data-dir="true"
        onClick={props.func}>
        {props.title}</a>
    </>
  );
}

export default Sort;