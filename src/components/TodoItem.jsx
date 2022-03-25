import React from 'react'
import '../style/style.css'
export default function TodoItem({id, title, completed}) {
  return (
    <div><li className='lists'>
      <div className='list-group'>
        <h1>{title}</h1>
        <h1>{completed}</h1>
        
      </div>
        </li></div>
  )
}
