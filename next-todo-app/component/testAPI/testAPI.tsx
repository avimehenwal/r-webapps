// importing FunctionComponent
import React, { useState, useEffect, useReducer, FunctionComponent } from 'react';
import axios from 'axios';
import styles from '../styles/TestApi.module.css'
import { initialState, todoAppReducerFn } from '../../store/todoAppStore'

const TestApi = () => {
  const [data, setData] = useState({})
  const [todoItem, setTodoItem] = useState({
    created: new Date(),
    title: 'third todo',
    description: 'Third todo task',
    completed: false,
    completedTimestamp: null,
    category: 'some category'
  })

  const url = 'http://localhost:3000/api/hello'

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [])

  const [todoAppStore, dispatch] = useReducer(todoAppReducerFn, initialState);

  return (
    <>
      <div>
        <h3>Test API</h3>
        <pre>
          {JSON.stringify(data, null, 4)}
        </pre>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([key, value], index) =>
            <tr key={key}>
              <td>{index}</td>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
            )}
          </tbody>
        </table>

      <div>
        <pre>
          {JSON.stringify(todoAppStore.todoApp, null, 4)}
        </pre>
      </div>
      <button
        type="button"
        onClick={() => dispatch({type: 'CREATE_TODO', payload: todoItem})}
      >
        ADD NEW TODO ITEM
      </button>
      </div>
    </>
  )
}

/* <button onClick={() => dispatch({type: 'decrement'})}>-</button>
Count: {state.count}
<button onClick={() => dispatch({type: 'increment'})}>+</button> */

export default TestApi