import React from 'react';

function button(props) {
  const classes = ['btn']

  if (typeof props !== 'undefined' && typeof props.type !== 'undefined') {
    classes.push('btn--' + props.type);
  }

  return (
    <div className={classes.join(' ')} onClick={props.onButtonPress}>
      {props.children}
    </div>
  )
}

export default button;