import React from 'react';
import '../assets/css/Color.css';

function Color(props) {
  return (
    <div id={props.id} className='color' onClick={() => props.setColor(props.dataColor)}></div>
  );
}

export default Color;
