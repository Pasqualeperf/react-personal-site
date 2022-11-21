import React from 'react';
import '../assets/css/Colors.css';
import Color from './Color';

function Colors(props) {
  return (
    <div className='colors d-flex align-items-center justify-content-between'>
        <Color id='Green' setColor={props.setColor} dataColor='#04e762' />
        <Color id='Orange' setColor={props.setColor} dataColor='#f5b700' />
        <Color id='Blue' setColor={props.setColor} dataColor='#00a1e4' />
        <Color id='Purple' setColor={props.setColor} dataColor='#dc0073' />
        <Color id='Yellow' setColor={props.setColor} dataColor='#89fc00' />
    </div>
  );
}

export default Colors;
