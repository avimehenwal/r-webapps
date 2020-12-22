import React, { useState, useEffect, useReducer, FunctionComponent } from 'react';
import { init, reducer, initialState } from '../store/todoAppStore'


function Counter(props) {
  const initialCount = props.initialCount || 0

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [localState, setLocalState] = useState(state)

  // useEffect(() => {
  //   // This code will be run every time count is changed
  //   console.log(state);
  //   setLocalState(state)
  // }, [state])

  return (
    <>
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}
      >
        Reset
      </button>
      <button
        onClick={() => dispatch({type: 'decrement'})}
      >
        -
      </button>
      <pre>
        {JSON.stringify(state, null, 4)}
      </pre>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default Counter
