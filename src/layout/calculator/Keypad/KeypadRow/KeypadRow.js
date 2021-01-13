import React from 'react';

function keypadRow(props) {
  return (
    <div className='keypadRow'>
      {props.children}
    </div>
  )
}

export default keypadRow;