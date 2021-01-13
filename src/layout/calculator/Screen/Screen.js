import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen'
import ComputationScreen from './ComputationScreen/ComputationScreen'

function screen(props) {
  return (
    <div className='screen'>
      <ResultScreen result={props.result}/>
      <ComputationScreen equation={props.equation} />
    </div>
  )
}

export default screen;