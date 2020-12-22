// importing FunctionComponent
import React, { useState, useEffect, useReducer, FunctionComponent } from 'react';
import axios from 'axios';
import styles from '../styles/TestApi.module.css'


const initialState = {count: 0};

function reducerFn(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const TestApi = () => {
  const [data, setData] = useState({})
  const url = 'http://localhost:3000/api/hello'

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [])

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      <div>
        <h3>Test API</h3>
        <pre>
          {JSON.stringify(data, null, 4)}
        </pre>

        <table>
          <tr>
            <th>S.No</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
          {Object.entries(data).map(([key, value], index) =>
          <tr key={key}>
            <td>{index}</td>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        )}
      </table>

      <div>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
      </div>
    </>
  )
}

export default TestApi