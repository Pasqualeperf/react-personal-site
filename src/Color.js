import React from 'react';
import './Color.css';

function Color(props) {
  return (
    <div id={props.id} className='color' onClick={() => props.setColor(props.dataColor)}></div>
  );
}

export default Color;
