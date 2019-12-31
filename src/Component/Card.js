import React from 'react'
export default function Card({ data, minus, add }) {
  return (
    <table>
      <tbody>
        {data.map(d => (
          <tr>
            <td>{d.name}</td>
            <td>
              <button onClick={() => minus(d)}> - </button>
              {d.count}
              <button onClick={() => add(d)}> + </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
