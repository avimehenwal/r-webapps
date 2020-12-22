// importing FunctionComponent
import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';

const TestApi = () => {
  const [data, setData] = useState({key: 'value'})

  useEffect(async() => {
    const result = await axios('http://localhost:3000/api/hello')
    setData(result.data)
  }, [])

  return (
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
    </div>
  )
}

export default TestApi